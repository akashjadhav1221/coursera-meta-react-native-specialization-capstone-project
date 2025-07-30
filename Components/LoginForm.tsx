import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import colors from '../constants/colors'
import { useNavigation } from 'expo-router';
import { setItem } from '../utils/asyncStorage';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';



const LoginForm = (props) => {

  const { btnTxt } = props;
  const navigation = useNavigation();

  const login = async () => {
    await setItem('isLoggedIn', '1');
    if (btnTxt === 'Update Profile') {
      navigation.goBack();
    } else {
      navigation.navigate('index' as never);
    }

  }

  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

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
    <ScrollView>
      <>
        <View style={styles.container1}>
          {
            !image && <Image style={styles.avatar} source={require('../assets/Profile.png')} />
          }
          {
            image && <Image style={styles.avatar} source={{ uri: image }} />

          }

          <TouchableOpacity style={styles.btn1} onPress={pickImage}>
            <Text style={styles.btnTxt1}>Upload Photo</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.formContainer}>
            <Text>Name<Text style={styles.ast}>*</Text></Text>
            <TextInput autoCapitalize='none' autoCorrect={false} placeholder='John Appleseed' style={styles.forTxtName} />
            <Text>Email<Text style={styles.ast}>*</Text></Text>
            <TextInput autoCapitalize='none' autoCorrect={false} placeholder='email@examle.com' keyboardType='email-address' style={styles.forTxtName} />
            <Text>Phone<Text style={styles.ast}>*</Text></Text>
            <TextInput autoCapitalize='none' autoCorrect={false} placeholder='+1 111 111 111' keyboardType='numeric' style={styles.forTxtName} />
            <Text>Address<Text style={styles.ast}>*</Text></Text>
            <TextInput autoCapitalize='none' autoCorrect={false} placeholder='CZ48, New York' style={styles.forTxtName} />
            <Text>Postal Code<Text style={styles.ast}>*</Text></Text>
            <TextInput autoCapitalize='none' autoCorrect={false} placeholder='07008' keyboardType='numeric' style={styles.forTxtName} />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={login}>
              <Text style={styles.btnTxt}>{btnTxt}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5
  },
  logo: {
    height: 70,
    width: '100%',
    resizeMode: 'contain',
    padding: 10
  },
  btnContainer: {
    width: '100%'
  },
  btn: {
    backgroundColor: colors.secondary,
    padding: 16,
    margin: 8,
    alignItems: 'center',
    borderRadius: 8
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  formContainer: {
    padding: 10,
    margin: 10,
  },
  forTxtName: {
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 10,
    margin: 10,
    height: 40,
    backgroundColor: 'white'
  },
  ast: {
    color: 'red'
  },
  container1: {
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
  btn1: {
    backgroundColor: colors.secondaryOrange,
    padding: 8,
    margin: 8,
    alignItems: 'center',
    borderRadius: 8
  },
  btnTxt1: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default LoginForm;