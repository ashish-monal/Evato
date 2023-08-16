import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../../src/screen/Welcome';
import SignUp from '../../src/screen/SignUp';
import AadhaarVerification from '../../src/screen/AadhaarVerification';
import UserSignUpDetails from '../../src/screen/UserSignUpDetails';
import MobileAndEmailVerification from '../../src/screen/MobileAndEmailVerification';
import TermsOfUse from '../../src/screen/TermsOfUse';
import KYC from '../../src/screen/Kyc';
import Dashboard from '../../src/screen/Dashboard';
import SignIn from '../../src/screen/SignIn';
import FPassword from '../../src/screen/FPassword';
import PasswordOTP from '../../src/screen/PasswordOTP';
import UpdatePassword from '../../src/screen/UpdatePassword';
import DrawerNavigation from './DrawerNavigation';
import ServiceRating from '../../src/screen/ServiceRating';
import VehicleConditionCheck from '../../src/screen/VehicleConditionCheck';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AadharVerification"
        component={AadhaarVerification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserSignUpDetails"
        component={UserSignUpDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MobileAndEmailVerification"
        component={MobileAndEmailVerification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermsOfUse"
        component={TermsOfUse}
        options={{headerShown: false}}
      />
      <Stack.Screen name="KYC" component={KYC} options={{headerShown: false}} />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={FPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PasswordOTP"
        component={PasswordOTP}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdatePassword"
        component={UpdatePassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Rating"
        component={ServiceRating}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ConditonCheck"
        component={VehicleConditionCheck}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
