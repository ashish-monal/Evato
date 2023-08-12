import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Footer from '../../components/Footer';
const UpdatePassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ScrollView>
      <Header />
      <View style={styles.View}>
        <Image
          source={require('../../assests/ovel-bg.png')}
          style={styles.bgImage}
        />
        <View style={styles.container}>
          <Text style={styles.text}>Reset Password</Text>
          <Image
            source={require('../../assests/otp.png')}
            style={{width: 200, height: 180, marginVertical: 20}}
            resizeMode="contain"
          />
          <Text style={[styles.text, {fontSize: 24}]}>Update Password</Text>
          <View>
            <View style={styles.inputView}>
              <MaterialIcons
                style={{marginTop: 10}}
                name="lock-outline"
                size={24}
                color="black"
              />
              <TextInput
                style={[styles.input, {width: '90%'}]}
                placeholder="Enter New Password"
                keyboardType="default"
                secureTextEntry={showPassword === false ? true : false}
                value={password}
                onChangeText={text => setPassword(text)}
              />
            </View>
            <View style={styles.inputView}>
              <MaterialIcons
                style={{marginTop: 10}}
                name="lock-outline"
                size={24}
                color="black"
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                keyboardType="default"
                secureTextEntry={showPassword === false ? true : false}
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
              />
              <Octicons
                style={{marginTop: 10}}
                name={showPassword == false ? 'eye-closed' : 'eye'}
                size={24}
                color="black"
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignIn')}
              style={styles.touchableOpacitySignIn}>
              <Text style={styles.SignIn}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default UpdatePassword;

const styles = StyleSheet.create({
  View: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    height: 'auto',
    marginTop: -75,
    marginHorizontal: 25,
  },
  bgImage: {
    width: '100%',
    height: 75,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#EAF4F0',
    height: 'auto',
    width: '100%',
  },
  text: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  inputView: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: 'gray',
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: '80%',
  },
  touchableOpacitySignIn: {
    marginVertical: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
    height: 50,
    paddingHorizontal: 90,
    borderRadius: 25,
    backgroundColor: 'green',
  },
  SignIn: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
