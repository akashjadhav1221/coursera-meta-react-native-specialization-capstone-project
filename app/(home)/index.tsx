import { StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../../Components/Categories';
import FoodItems from '../../Components/FoodItems';
import { useNavigation } from 'expo-router';
import TopHeader from '../../Components/TopHeader';
import Hero from '../../Components/Hero';

export default function Index() {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => <TopHeader />
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Categories />
            <Hero />
            <FoodItems />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        top: 50
    }
})