import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import Pass from '../../components/Pass';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FooterSticky from '../../components/FooterSticky';

const BuyRidePass = ({navigation}) => {
  const Drawer = () => {
    navigation.openDrawer();
  };
  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground
        source={require('../../assests/headerBackground.png')}
        style={styles.image}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginVertical: 100,
          }}>
          <TouchableOpacity
            onPress={Drawer}
            style={{zIndex: 10, marginTop: 10}}>
            <FontAwesome
              name="bars"
              size={30}
              color="white"
              style={{
                marginTop: -75,
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>
          <Image
            source={require('../../assests/headerName.png')}
            resizeMode="contain"
            style={{
              marginTop: -75,
              height: 50,
              flex: 2,
              marginLeft: -50,
            }}
          />
        </View>
      </ImageBackground>

      <View style={styles.View}>
        <View>
          <Text style={styles.referText}>Buy Ride Pass</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text2}>Your Current</Text>
          <Text style={styles.text2}>Wallet Balance</Text>
          <Text style={styles.money}>630 &#x20B9;</Text>
        </View>

        <View style={styles.view3}>
          <Text style={styles.text3}>Select Your Pass</Text>
        </View>
        <View style={styles.view4}>
          <Pass
            title="Hour Pass"
            money="50"
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
            color="#E69898"
            colorSecond="#9B4C4C"
          />
          <Pass
            title="Half Day Pass"
            money="290"
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
            color="#D7D777"
            colorSecond="#99994D"
          />
          <Pass
            title="Full Day Pass"
            money="390"
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
            color="#80ADD7"
            colorSecond="#2F5171"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.touchableButton}>
            <Text style={styles.text}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FooterSticky />
    </ScrollView>
  );
};

export default BuyRidePass;

const styles = StyleSheet.create({
  View: {
    width: '90%',
    height: 'auto',
    marginTop: -75,
    marginHorizontal: 25,
    marginBottom: 160,
  },
  referText: {
    // marginTop: -75,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  touchableButton: {
    backgroundColor: 'green',
    borderRadius: 20,
    height: 60,
    marginHorizontal: 40,
    marginVertical: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
    paddingVertical: 14,
    textAlign: 'center',
  },
  view2: {
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
    paddingTop: 15,
    paddingBottom: 10,
  },
  money: {
    color: 'red',
    fontSize: 24,
    fontWeight: '600',
    paddingBottom: 10,
  },
  view3: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text3: {
    color: 'green',
    fontSize: 24,
  },
  view4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
});
