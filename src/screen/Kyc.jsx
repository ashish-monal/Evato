import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Footer from '../../components/Footer';
const KYC = ({navigation}) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [doc, setDoc] = useState('');

  return (
    <ScrollView>
      <Header />
      <View style={styles.View}>
        <Image
          source={require('../../assests/ovel-bg.png')}
          style={styles.bgImage}
        />
        <View style={styles.container}>
          <Text style={[styles.text]}>KYC</Text>

          <View style={styles.inputView}>
            <FontAwesome name="bank" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Account Number*"
              keyboardType="number-pad"
              value={accountNumber}
              maxLength={17}
              onChangeText={text => setAccountNumber(text)}
            />
          </View>
          <View style={styles.inputView}>
            <FontAwesome name="code-fork" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="IFSC Code*"
              keyboardType="name-phone-pad"
              maxLength={11}
              value={ifscCode}
              onChangeText={text => setIfscCode(text)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Upload Driving Licence(Max 100kb jpg, png)*"
              keyboardType="number-pad"
              value={doc}
              onChangeText={text => setDoc(text)}
            />
            <FontAwesome name="upload" size={24} color="black" />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('DrawerNavigation')}
            style={styles.touchableOpacitySignIn}>
            <Text style={styles.SignIn}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default KYC;

const styles = StyleSheet.create({
  View: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    marginTop: -75,
    marginHorizontal: 25,
    marginBottom: 27,
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
    color: 'green',
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
  inputView: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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
});
