import { Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import categoriesData from '../assets/data/master-data.json';
import colors from '../constants/colors';

interface Category {
    id: number,
    name: string,
    checked?: boolean
}

const categories = categoriesData;

const Categories = () => {
    return (
        <ScrollView horizontal={true} style={styles.scrollViewContainer} showsHorizontalScrollIndicator={false}>
            {
                categories.categories.map((category, index) => (
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