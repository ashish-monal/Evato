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
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Footer from '../../components/Footer';
import HeaderInside from '../../components/HeaderInside';
const UserProfile = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <ScrollView style={{flex: 1}}>
      <HeaderInside navigation={navigation} />
      <View style={styles.View}>
        <Image
          source={require('../../assests/ovel-bg.png')}
          style={styles.bgImage}
        />
        <View style={styles.container}>
          <Text style={styles.text}>User Profile</Text>
          <Image
            source={require('../../assests/user-image.png')}
            resizeMode="cover"
            style={{marginVertical: 25}}
          />

          {/* TextInput View */}

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
          {/* Mobile Number */}
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

          {/* User Email */}
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
            <TextInput
              style={styles.input}
              placeholder="Select State"
              value={state}
              keyboardType="default"
              returnKeyType="next"
              onChangeText={text => setState(text)}
            />
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

          {/* Button */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={[
                styles.touchableOpacitySignIn,
                {backgroundColor: 'white', borderColor: 'red', borderWidth: 1},
              ]}>
              <Text style={[styles.SignIn, {color: 'red', fontWeight: '400'}]}>
                Edit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.touchableOpacitySignIn,
                {backgroundColor: 'green'},
              ]}>
              <Text style={styles.SignIn}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default UserProfile;

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
  },
  SignIn: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
