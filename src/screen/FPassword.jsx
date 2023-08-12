import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Footer from '../../components/Footer';
const FPassword = ({navigation}) => {
  return (
    <ScrollView>
      <Header />
      <View style={styles.View}>
        <Image
          source={require('../../assests/ovel-bg.png')}
          style={styles.bgImage}
        />
        <View style={styles.container}>
          <Text style={styles.text}>Forget Password</Text>
          <Image
            source={require('../../assests/fpassword.png')}
            resizeMode="cover"
          />
          <View style={styles.inputView}>
            <AntDesign
              style={{marginTop: 10}}
              name="phone"
              size={24}
              color="black"
            />
            <TextInput
              style={styles.input}
              placeholder="Registered Mobile Number"
              keyboardType="number-pad"
              // value={mobile}
              // onChangeText={text => setMobile(text)}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('PasswordOTP')}
            style={styles.touchableOpacitySignIn}>
            <Text style={styles.SignIn}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'column', marginTop: 70}}>
        <Footer />
      </View>
    </ScrollView>
  );
};

export default FPassword;

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: 75,
  },
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
    marginVertical: 20,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: '80%',
  },
  touchableOpacitySignIn: {
    flexDirection: 'column',
    justifyContent: 'center',
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
  },
});
