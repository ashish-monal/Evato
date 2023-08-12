import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Footer from '../../components/Footer';
const Wallet = () => {
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [manualAmount, setManualAmount] = useState('0');

  return (
    <ScrollView style={{flex: 1}}>
      <Header />
      <View style={styles.View}>
        <View>
          <Text style={styles.text}>Wallet</Text>
        </View>
        <View style={styles.view1}>
          <Text style={[styles.text2, {paddingTop: 15}]}>Your Current</Text>
          <Text style={styles.text2}>Wallet Balance</Text>
          <Text style={styles.text3}>630 &#x20B9;</Text>
        </View>

        <View style={styles.view3}>
          <Image
            source={require('../../assests/qr.jpg')}
            style={{marginVertical: 20}}
          />
        </View>
        <Text style={styles.text4}>Choose Top Up Amount</Text>

        <View style={styles.view4}>
          <TouchableOpacity
            style={[
              styles.view5,
              {
                backgroundColor: 'white',
                borderWidth: selectedAmount === 100 ? 2 : 0,
              },
            ]}
            onPress={() => {
              setSelectedAmount(100);
              setManualAmount('100');
            }}>
            <Entypo
              name="circle"
              size={24}
              color={selectedAmount === 100 ? 'red' : 'black'}
              style={styles.circle}
            />
            <Text style={styles.text5}>
              100 <Text style={{color: 'red'}}>&#x20B9;</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.view5,
              {
                backgroundColor: 'white',
                borderWidth: selectedAmount === 200 ? 2 : 0,
              },
            ]}
            onPress={() => {
              setSelectedAmount(200);
              setManualAmount('200');
            }}>
            <Entypo
              name="circle"
              size={24}
              color={selectedAmount === 200 ? 'red' : 'black'}
              style={styles.circle}
            />
            <Text style={styles.text5}>
              200 <Text style={{color: 'red'}}>&#x20B9;</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.view5,
              {
                backgroundColor: 'white',
                borderWidth: selectedAmount === 600 ? 2 : 0,
              },
            ]}
            onPress={() => {
              setSelectedAmount(600);
              setManualAmount('600');
            }}>
            <Entypo
              name="circle"
              size={24}
              color={selectedAmount === 600 ? 'red' : 'black'}
              style={styles.circle}
            />
            <Text style={styles.text5}>
              600 <Text style={{color: 'red'}}>&#x20B9;</Text>
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputView}>
          <FontAwesome
            style={{marginTop: 10}}
            name="rupee"
            size={24}
            color="black"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Mannualy"
            keyboardType="number-pad"
            value={manualAmount}
            onChangeText={text => {
              setSelectedAmount(0);
              setManualAmount(text);
            }}
            // value={aadhaar}
            // onChangeText={text => setAadhar(text)}
          />
        </View>

        <TouchableOpacity style={styles.touchableOpacitySignIn}>
          <Text style={styles.SignIn}>Recharge Now</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: -100}}>
        <Footer />
      </View>
    </ScrollView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  View: {
    width: '90%',
    height: 'auto',
    marginTop: -75,
    marginHorizontal: 25,
    marginBottom: 160,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  view1: {
    marginTop: 70,
    width: '75%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 'auto',
    backgroundColor: '#EAF4F0',
    borderRadius: 20,
  },
  text2: {
    fontSize: 20,
    fontWeight: '500',
    paddingBottom: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: '80%',
    marginTop: 10,
  },
  touchableOpacitySignIn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    width: '80%',
    height: 50,
    marginVertical: 15,
    borderRadius: 25,
  },
  SignIn: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text3: {
    color: 'red',
    fontSize: 24,
    fontWeight: '600',
    paddingBottom: 10,
  },
  view3: {
    marginTop: 50,
    width: '75%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 'auto',
    backgroundColor: '#EAF4F0',
    borderRadius: 20,
  },
  text4: {
    color: 'green',
    marginVertical: 15,
    textAlign: 'center',
    fontSize: 24,
  },
  view4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignContent: 'center',
    marginHorizontal: 25,
  },
  view5: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  circle: {margin: 5, marginTop: 12},
  text5: {
    margin: 5,
    marginEnd: 10,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 12,
  },
});
