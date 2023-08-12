import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import OTP from '../../components/OTP';
import Footer from '../../components/Footer';

const PasswordOTP = ({navigation}) => {
  return (
    <ScrollView>
      <Header />
      <View style={styles.View}>
        <Image
          source={require('../../assests/ovel-bg.png')}
          style={styles.bgImage}
        />
        <View style={styles.container}>
          <Text style={styles.text}>Password OTP</Text>
          <Image
            source={require('../../assests/otp.png')}
            style={{width: 200, height: 180, marginVertical: 20}}
            resizeMode="contain"
          />
          <OTP />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('UpdatePassword')}
          style={styles.touchableOpacitySignIn}>
          <Text style={styles.SignIn}>Next</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default PasswordOTP;

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
