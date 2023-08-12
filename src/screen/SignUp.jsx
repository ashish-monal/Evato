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
import Feather from 'react-native-vector-icons/Feather';

const SignUp = ({navigation}) => {
  const [selected, setSelected] = useState(false);
  const [aadhaar, setAadhar] = useState('');
  const [mobile, setMobile] = useState('');

  return (
    <ScrollView style={{flex: 1}}>
      <Header />
      <View style={styles.View}>
        <Image
          source={require('../../assests/ovel-bg.png')}
          style={styles.bgImage}
        />
        <View style={styles.container}>
          <Text style={styles.text}>Sign Up</Text>
          <View style={styles.textInputView}>
            <View style={styles.inputView}>
              <AntDesign
                style={{marginTop: 10}}
                name="idcard"
                size={24}
                color="black"
              />
              <TextInput
                style={styles.input}
                placeholder="Aadhar Number*"
                keyboardType="number-pad"
                value={aadhaar}
                onChangeText={text => setAadhar(text)}
              />
            </View>

            <View style={styles.inputView}>
              <AntDesign
                style={{marginTop: 10}}
                name="phone"
                size={24}
                color="black"
              />
              <TextInput
                style={styles.input}
                placeholder="Mobile Number*"
                keyboardType="number-pad"
                value={mobile}
                onChangeText={text => setMobile(text)}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              setSelected(!selected);
            }}
            style={{flexDirection: 'row', marginHorizontal: 45}}>
            <Feather
              name={selected ? 'check-square' : 'square'}
              size={24}
              color="red"
            />
            <Text
              style={{
                marginLeft: 10,
                color: 'red',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Terms & Conditions
            </Text>
          </TouchableOpacity>

          <View style={styles.textInputView}>
            <TouchableOpacity
              style={styles.touchableOpacitySignIn}
              onPress={() => navigation.navigate('AadharVerification')}>
              <Text style={styles.SignIn}>Sign In</Text>
            </TouchableOpacity>
            <Text
              onPress={() => navigation.navigate('SignIn')}
              style={styles.account}>
              Already have an account? <Text style={{color: 'red'}}>Login</Text>
            </Text>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  View: {
    width: '90%',
    height: 'auto',
    marginTop: -75,
    marginHorizontal: 25,
    marginBottom: 25,
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
