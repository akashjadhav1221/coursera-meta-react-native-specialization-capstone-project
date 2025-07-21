import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../../Components/Categories';
import colors from '../../constants/colors';
import FoodItems from '../../Components/FoodItems';
import { useNavigation } from 'expo-router';
import TopHeader from '../../Components/TopHeader';

export default function Index() {

    const navigation = useNavigation();

    useLayoutEffect(() => {
            navigation.setOptions({
                  header: () => <TopHeader/>
            });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Categories />
            <View style={styles.titleContainer}>
                <View style={styles.txtContainer}>
                <Text style={styles.appTitleTxt}>Little Lemon</Text>
                <Text style={styles.appTitleSubTxt}>Pune</Text>
                <Text style={styles.appTitleIntro} numberOfLines={4}>
                    We are family owned {"\n"}Mediterranean restaurant, 
                    {"\n"}focused on traditional {"\n"}recipes served {"\n"}with a modern twist.
                </Text>
                </View>
                <View>
               <Image source={require('../../assets/img/hero.png')} style={styles.heroImg} />
                </View>
            </View>
            <FoodItems />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white',
        top: 50
    },
    txtContainer: {
        padding: 5
    },
    titleContainer: {
        backgroundColor: colors.primary,
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 40
    },
    appTitleTxt: {
        marginTop: 10,
        padding: 5,
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.secondary
    },
    appTitleSubTxt: {
        padding: 5,
        fontSize: 21,
        fontWeight: 'bold',
        color: colors.secondaryGrey
    },
    appTitleIntro: {
        padding: 5,
        fontSize: 15,
        color: colors.secondaryGrey
    },
    heroImg: {
        height: 150,
        width: 150,
        resizeMode: 'cover'
    }
})