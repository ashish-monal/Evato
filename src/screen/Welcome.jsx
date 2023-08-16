import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FooterSticky from '../../components/FooterSticky';

const Welcome = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <View
        style={{marginTop: -100, flexDirection: 'column', alignSelf: 'center'}}>
        <Image source={require('../../assests/welcome.png')} />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={styles.touchableOpacitySignIn}>
          <Text style={styles.SignIn}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacitySignUp}
          onPress={() => navigation.navigate('SignUp')}>
          <MaterialIcons
            name="person-add-alt-1"
            color="red"
            size={22}
            style={styles.icon}
          />
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <FooterSticky />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    flex: 1 / 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableOpacitySignIn: {
    backgroundColor: 'green',
    width: 200,
    height: 45,
    borderRadius: 25,
  },
  SignIn: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
  touchableOpacitySignUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
    borderWidth: 2,
    borderColor: '#dc3545',
    width: 200,
    height: 45,
    borderRadius: 25,
  },
  signUp: {
    fontWeight: 'bold',
    color: '#dc3545',
    textAlign: 'center',
    marginTop: 8,
    fontSize: 18,
  },
  icon: {
    marginTop: 10,
    marginRight: 8,
    fontWeight: 'bold',
  },
});
