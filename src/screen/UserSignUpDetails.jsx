import {
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Footer from '../../components/Footer';
const UserSignUpDetails = ({navigation}) => {
  const [selected, setSelected] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [referCode, setReferCode] = useState('');
  const [error, setError] = useState('');

  const stateNames = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Puducherry',
  ];

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
          {/* User Name */}
          <View style={styles.inputView}>
            <Entypo name="user" size={24} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Name as National ID"
              value={name}
              keyboardType="name-phone-pad"
              returnKeyType="next"
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={styles.inputView}>
            <FontAwesome name="phone" size={24} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              value={phone}
              keyboardType="number-pad"
              returnKeyType="next"
              onChangeText={text => setPhone(text)}
            />
          </View>
          <View style={styles.inputView}>
            <Entypo name="mail" size={24} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Email ID"
              value={email}
              returnKeyType="next"
              keyboardType="email-address"
              onChangeText={text => setEmail(text)}
            />
          </View>
          {/* User Address */}
          <View style={styles.inputView}>
            <Entypo name="home" size={24} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={address}
              keyboardType="default"
              returnKeyType="next"
              onChangeText={text => setAddress(text)}
            />
          </View>
          {/* User State */}
          <View style={styles.inputView}>
            <Entypo name="location" size={24} color="gray" />
            <Picker
              style={styles.input}
              selectedValue={state}
              onValueChange={itemValue => setState(itemValue)}>
              <Picker.Item label="Select State" value="" />
              {stateNames.map((stateName, index) => (
                <Picker.Item key={index} label={stateName} value={stateName} />
              ))}
            </Picker>
          </View>
          {/* User City */}
          <View style={styles.inputView}>
            <MaterialCommunityIcons name="city" size={24} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="City"
              value={city}
              keyboardType="default"
              returnKeyType="next"
              onChangeText={text => setCity(text)}
            />
          </View>
          {/* User Pincode */}
          <View style={styles.inputView}>
            <Entypo name="location-pin" size={24} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="PIN Code"
              value={pinCode}
              keyboardType="number-pad"
              returnKeyLabel="next"
              onChangeText={text => setPinCode(text)}
            />
          </View>
          {/* User Password */}
          <View style={styles.inputView}>
            <Entypo name="lock" size={24} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              keyboardType="default"
              returnKeyType="next"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />
          </View>
          {/* User Confirm Password */}
          <View style={styles.inputView}>
            <Entypo name="lock" size={24} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={confirmPassword}
              secureTextEntry={true}
              keyboardType="default"
              returnKeyType="done"
              onChangeText={text => setConfirmPassword(text)}
            />
          </View>

          {/* User Refer Code */}
          <View style={styles.inputView}>
            <Entypo name="slideshare" size={24} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Refer Code"
              value={referCode}
              keyboardType="default"
              returnKeyType="done"
              onChangeText={text => setReferCode(text)}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              setSelected(!selected);
            }}
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              justifyContent: 'flex-start',
            }}>
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
              I Agree
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('MobileAndEmailVerification')}
            style={[styles.touchableOpacitySignIn, {backgroundColor: 'green'}]}>
            <Text style={styles.SignIn}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default UserSignUpDetails;

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
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAF4F0',
    height: 'auto',
    width: '100%',
  },
  text: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputView: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 25,
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
    flexDirection: 'column',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 25,
    marginBottom: 25,
    marginRight: 10,
    marginVertical: 15,
  },
  SignIn: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
