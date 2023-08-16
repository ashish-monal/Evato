import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import HeaderInside from '../../components/HeaderInside';
import OTP from '../../components/OTP';
import FooterSticky from '../../components/FooterSticky';

const StartAndEndRide = ({navigation}) => {
  const [starRideOtp, setStartRideOtp] = useState(['', '', '', '']);
  const [endRideOtp, setEndRideOtp] = useState(['', '', '', '']);
  const otpInputRefs = useRef([]);

  const handleOTPChange = (index, text) => {
    if (text.length > 1) {
      text = text.charAt(text.length - 1);
    }

    const newOtpDigits = [...starRideOtp];
    newOtpDigits[index] = text;
    setStartRideOtp(newOtpDigits);

    if (text !== '') {
      if (index < starRideOtp.length - 1) {
        otpInputRefs.current[index + 1].focus();
      } else {
        otpInputRefs.current[index].blur();
      }
    }
  };

  const handleVerifyOTP = () => {
    const enteredOTP = starRideOtp.join('');
    if (enteredOTP.length !== 4) {
      Alert.alert('Error', 'Please Enter a valid 4-digit OTP');
    } else {
      Alert.alert(
        'Success',
        'OTP Verified Sucessfully. Enjoy your happy and safe Ride',
      );
    }
  };

  const handleEndRideOTP = (index, text) => {
    if (text.length > 1) {
      text = text.charAt(text.length - 1);
    }
    const newOTPDigits = [...endRideOtp];
    newOTPDigits[index] = text;
    setEndRideOtp(newOTPDigits);

    if (text !== '') {
      if (index < endRideOtp.length - 1) {
        otpInputRefs.current[index + 1].focus();
      } else {
        otpInputRefs.current[index].blur();
      }
    }
  };

  const endRideVerifyOTP = () => {
    const enteredOTP = endRideOtp.join('');
    if (enteredOTP.length !== 4) {
      Alert.alert('Error', 'Please Enter a valid 4- digit OTP to End the ride');
    } else {
      Alert.alert('Success', 'OTP Verified Sucessfully.Have a nice day Ahead');
    }
  };
  return (
    <ScrollView style={{flex: 1}}>
      <HeaderInside navigation={navigation} />
      <View style={styles.View}>
        <View>
          <Text style={styles.referText}>Buy Ride Pass</Text>
        </View>
        {/* OTP to start Ride */}
        <View style={styles.container}>
          <Text style={styles.title}>OTP to Start Ride</Text>
          <View style={styles.otpContainer}>
            {starRideOtp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={text => handleOTPChange(index, text)}
                value={digit}
                ref={ref => (otpInputRefs.current[index] = ref)}
              />
            ))}
          </View>
          <TouchableOpacity
            style={styles.touchableOpacitySignIn}
            onPress={handleVerifyOTP}>
            <Text style={styles.SignIn}>Start Ride</Text>
          </TouchableOpacity>
        </View>
        {/* OTP to End Ride */}
        <View style={styles.container}>
          <Text style={styles.title}>OTP to End Ride</Text>
          <View style={styles.otpContainer}>
            {endRideOtp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={text => handleEndRideOTP(index, text)}
                value={digit}
                ref={ref => (otpInputRefs.current[index] = ref)}
              />
            ))}
          </View>
          <TouchableOpacity
            style={styles.touchableOpacitySignIn}
            onPress={endRideVerifyOTP}>
            <Text style={styles.SignIn}>End Ride</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.touchableOpacitySignIn}
          onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.SignIn}>Another Ride</Text>
        </TouchableOpacity>
      </View>
      <FooterSticky />
    </ScrollView>
  );
};

export default StartAndEndRide;

const styles = StyleSheet.create({
  View: {
    width: '90%',
    height: 'auto',
    marginTop: -75,
    marginHorizontal: 25,
    marginBottom: 160,
  },
  referText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 75,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginBottom: 20,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderBottomWidth: 1,
    fontSize: 18,
    textAlign: 'center',
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
