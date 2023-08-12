import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FooterSticky from '../../components/FooterSticky';

const AadhaarVerification = ({navigation}) => {
  const [otpDigits, setOtp] = useState(['', '', '', '', '', '']);
  const [isResendEnabled, setResendEnabled] = useState(true);
  const otpInputRefs = useRef([]);

  const handleOTPChange = (index, text) => {
    if (text.length > 1) {
      text = text.charAt(text.length - 1);
    }

    const newOtpDigits = [...otpDigits];
    newOtpDigits[index] = text;
    setOtp(newOtpDigits);

    if (text !== '') {
      if (index < otpDigits.length - 1) {
        otpInputRefs.current[index + 1].focus();
      } else {
        otpInputRefs.current[index].blur();
      }
    }
  };

  const handleResendOTP = () => {
    Alert.alert(
      'Resend OTP',
      'OTP Resend Sucessfully.please enter the otp again.',
    );
    //Logic to resend OTP, you can implement your logic here
    setResendEnabled(false);
    setTimeout(() => {
      setResendEnabled(true);
    }, 30000);
  };

  const handleVerifyOTP = () => {
    const enteredOTP = otpDigits.join('');
    if (enteredOTP.length !== 6) {
      Alert.alert('Error', 'Please enter a valid 6 - digit OTP.');
    } else {
      // Logic to verify OTP, you can implement your own logic here
      Alert.alert('Success', 'OTP Verified Sucessfully.');
      navigation.navigate('UserSignUpDetails');
    }
  };
  return (
    <ScrollView>
      <Header />
      <View style={styles.View}>
        <Image
          source={require('../../assests/ovel-bg.png')}
          style={styles.bgImage}
        />
        <View style={styles.container}>
          <Text style={[styles.text, {color: 'gray'}]}>
            Aadhaar Verification
          </Text>
          <Text style={styles.text}>Enter OTP</Text>

          <View style={styles.otpContainer}>
            {otpDigits.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                placeholder="*"
                onChangeText={text => handleOTPChange(index, text)}
                value={digit}
                ref={ref => (otpInputRefs.current[index] = ref)}
              />
            ))}
          </View>
          <TouchableOpacity
            style={
              {
                justifyContent: 'center',
                alignSelf: 'center',
                width: '80%',
                height: 50,
                paddingHorizontal: 90,
                borderRadius: 25,
                backgroundColor: 'white',
              }[!isResendEnabled && styles.disabledButton]
            }
            onPress={handleResendOTP}>
            <Text style={[styles.SignIn, {color: 'red'}]}>Resend</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacitySignIn}
            onPress={handleVerifyOTP}>
            <Text style={styles.SignIn}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: 174,
        }}>
        <Footer />
      </View>
    </ScrollView>
  );
};

export default AadhaarVerification;

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
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 200,
    marginBottom: 20,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderBottomWidth: 1,
    fontSize: 18,
    textAlign: 'center',
    marginRight: 10,
  },
  resendButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  verifyButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: 'gray',
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
