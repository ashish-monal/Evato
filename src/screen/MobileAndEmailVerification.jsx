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

const MobileAndEmailVerification = ({navigation}) => {
  return (
    <ScrollView>
      <Header />
      <View style={styles.View}>
        <Image
          source={require('../../assests/ovel-bg.png')}
          style={styles.bgImage}
        />
        <View style={styles.container}>
          <Text style={styles.text}>Mobile & Email Verification</Text>
          <View>
            <Text style={[styles.text, {color: 'green', fontSize: 24}]}>
              Enter Mobile OTP
            </Text>
            <OTP />
          </View>

          <View>
            <Text style={[styles.text, {color: 'green', fontSize: 24}]}>
              Enter Email OTP
            </Text>
            <OTP />
          </View>
          <TouchableOpacity
            style={styles.touchableOpacitySignIn}
            onPress={() => navigation.navigate('TermsOfUse')}>
            <Text style={styles.SignIn}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default MobileAndEmailVerification;

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
    backgroundColor: '#EAF4F0',
    height: 'auto',
    width: '100%',
  },
  text: {
    color: 'gray',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
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
