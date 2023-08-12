import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const SignIn = ({navigation}) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ScrollView style={{flex: 1}}>
      <Header />
      <View style={styles.View}>
        <Image
          source={require('../../assests/ovel-bg.png')}
          style={styles.bgImage}
        />
        <View style={styles.container}>
          <Text style={styles.text}>Sign In</Text>
          <View style={styles.textInputView}>
            <View style={styles.inputView}>
              <AntDesign
                style={{marginTop: 10}}
                name="phone"
                size={24}
                color="black"
              />
              <TextInput
                style={styles.input}
                placeholder="Mobile Number"
                keyboardType="number-pad"
                value={mobile}
                onChangeText={text => setMobile(text)}
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
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={showPassword === false ? true : false}
                value={password}
                onChangeText={text => setPassword(text)}
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
          </View>
          <Text
            onPress={() => navigation.navigate('ForgetPassword')}
            style={{
              fontSize: 20,
              color: 'red',
              textAlign: 'right',
              marginRight: 35,
              marginTop: -10,
            }}>
            Forget Password ?
          </Text>

          <View style={styles.textInputView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('DrawerNavigation')}
              style={styles.touchableOpacitySignIn}>
              <Text style={styles.SignIn}>Sign In</Text>
            </TouchableOpacity>
            <Text
              onPress={() => navigation.navigate('SignUp')}
              style={styles.account}>
              Don't have an account?{' '}
              <Text style={{color: 'red'}}>Register</Text>
            </Text>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  View: {
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
    backgroundColor: '#EAF4F0',
    height: 'auto',
    width: '100%',
  },
  textInputView: {
    alignItems: 'center',
    marginVertical: 15,
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
  text: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  touchableOpacitySignIn: {
    backgroundColor: 'green',
    width: '80%',
    height: 50,
    borderRadius: 25,
    marginBottom: 25,
  },
  SignIn: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
  account: {
    fontSize: 18,
    marginBottom: 25,
  },
});
