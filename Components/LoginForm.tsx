import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import { useNavigation } from 'expo-router';
import { setItem } from '../utils/asyncStorage';

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
  return (
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
    position: 'absolute',
    bottom: -70,
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
    height: 40
  },
  ast: {
    color: 'red'
  }
})

export default LoginForm;