import { Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react';
import categoriesData from '../assets/data/data.json';
import colors from '../constants/colors';
import { useSQLiteContext } from 'expo-sqlite';

interface Category {
    id: number,
    name: string,
    checked?: boolean
}

const Categories = (props) => {

    const { dbReady } = props;
    const db = useSQLiteContext();
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        if (!dbReady) return;
        let isMounted = true;

        const getCategories = async () => {
            try {
                const result = await db.getAllAsync<Category>(`SELECT * FROM CATEGORIES`);
                console.log('CATEGORIES RESULT - ', result);
                if (isMounted && result && result.length > 0) {
                    setCategories(result);
                } else if (isMounted && result && result.length === 0) {
                    console.log('NO CATEGORIES FOUND');
                    insertCategories();
                }
                console.log('CATEGORIES RESULT - ', categories);
            } catch (e) {
                console.log('CATEGORY DB ERROR -', e);
            } finally {
                console.log('CATEGORY DB SUCCESS');
            }
        }

        getCategories();

        return () => {
            isMounted = false;
        };

    }, [dbReady]);


    const insertCategories = async () => {
        try {

            const categoriesJSON = categoriesData;

            await db.execAsync('BEGIN TRANSACTION');

            // Create the insert statement once
            const stmt = await db.prepareAsync(
                'INSERT INTO CATEGORIES (name, checked) VALUES (?,?)'
            );

            // Insert all categories
            for (const category of categoriesJSON) {
                await stmt.executeAsync([category.name, category.checked]);
            }

            // Commit the transaction
            await db.execAsync('COMMIT');

            const result = await db.getAllAsync<Category>('SELECT * FROM CATEGORIES');
            if (result.length > 0) {
                setCategories(result);
            }
        } catch (e) {
            console.log('CATEGORY TABLE ENTRY ERROR - ', e);
            Alert.alert('Error', ' Something went wrong - ' + e.message);
        } finally {
            console.log('CATEGORY TABLE ENTRY SUCCESS - ');
        }
    }


    return (
        <ScrollView horizontal={true} style={styles.scrollViewContainer} showsHorizontalScrollIndicator={false}>
            { 
            (categories && categories.length > 0) &&
                categories.map((category, index) => (
                    <TouchableOpacity key={index} style={styles.categoryBtn}>
                        <Text style={styles.categoryBtnTxt}>{category.name}</Text>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        maxHeight: 50,
        backgroundColor: 'white',
        alignContent: 'center',
        margin: 5
    },
    categoryBtn: {
        backgroundColor: colors.secondaryGrey,
        padding: 10,
        margin: 5,
        alignItems: 'center',
        borderRadius: 15
    },
    categoryBtnTxt: {
        fontSize: 16,
    }
});

export default Categories