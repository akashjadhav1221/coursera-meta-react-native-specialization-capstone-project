import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react';
import colors from '../constants/colors';

const Hero = () => {
    return (
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
                <Image source={require('../assets/img/hero.png')} style={styles.heroImg} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: colors.primary,
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 40
    },
    txtContainer: {
        padding: 5
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

export default Hero;