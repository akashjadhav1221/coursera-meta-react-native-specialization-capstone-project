import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import LoginForm from '../../../Components/LoginForm'
import colors from '../../../constants/colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from 'expo-router';

const Account = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => (navigation.goBack())}>
                    <Ionicons name='close-outline' size={28} color={colors.primary} />
                </TouchableOpacity>
            )
        })
    }, []);

    return (
        <>
            <View style={styles.container}>
                <Image style={styles.avatar} source={require('../../../assets/Profile.png')} />
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Edit Photo</Text>
                </TouchableOpacity>
            </View>
            <LoginForm btnTxt={'Update Profile'} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        textAlign: 'center'
    },
    avatar: {
        margin: 25,
        height: 100,
        width: 100,
        borderRadius: 50,
        resizeMode: 'cover',
        borderWidth: 0.5,
        backgroundColor: 'white',
        borderColor: colors.primary
    },
    btn: {
        backgroundColor: colors.secondaryOrange,
        padding: 8,
        margin: 8,
        alignItems: 'center',
        borderRadius: 8
    },
    btnTxt: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default Account;