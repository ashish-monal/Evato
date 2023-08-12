import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import UserProfile from '../../src/screen/UserProfile';
import Dashboard from '../../src/screen/Dashboard';
import Wallet from '../../src/dashboard/Wallet';
import BuyRidePass from '../../src/dashboard/BuyRidePass';
import MyRidePass from '../../src/dashboard/MyRidePass';
import MyBooking from '../../src/dashboard/MyBooking';
import Transaction from '../../src/screen/Transaction';
import Refer from '../../src/dashboard/Refer';
import Support from '../../src/dashboard/Support';
import TermsAndUse from '../../src/dashboard/TermsAndUse';
import PrivacyPolicy from '../../src/dashboard/PrivacyPolicy';
import RefundAndCancellation from '../../src/dashboard/RefundAndCancellation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen
        name="MyProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Wallet"
        component={Wallet}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Buy Ride Pass"
        component={BuyRidePass}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="My Ride Pass"
        component={MyRidePass}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="My Booking"
        component={MyBooking}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Payment History"
        component={Transaction}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Refer a Friend"
        component={Refer}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Support"
        component={Support}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Terms of Use"
        component={TermsAndUse}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Privacy Policy"
        component={PrivacyPolicy}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Refund and Cancellation Policy"
        component={RefundAndCancellation}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
