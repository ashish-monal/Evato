import React from 'react';
import {View, Image, Text, Alert} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
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
import StartAndEndRide from '../../src/dashboard/StartAndEndRide';
import ServiceRating from '../../src/screen/ServiceRating';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 20,
        }}>
        <Image
          source={require('../../assests/user-image.png')}
          style={{width: 80, height: 80, borderRadius: 40}}
        />
        <Text style={{marginTop: 10, fontSize: 18}}>User Name</Text>
        <Text>Email@gmail.com</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Log Out"
        onPress={() => Alert.alert('Log Out Successfully')}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      backBehavior="initialRoute"
      drawerContent={CustomDrawerContent}>
      <Drawer.Screen
        name="User Profile"
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
        name="Start/End Ride"
        component={StartAndEndRide}
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
      <Drawer.Screen
        name="Rating"
        component={ServiceRating}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
