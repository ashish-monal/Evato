import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MyRidePass = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <Header />
      <Text style={styles.title}>My Ride Pass</Text>
      <View style={styles.view2}>
        <Text style={styles.text2}>Your Current</Text>
        <Text style={styles.text2}>Wallet Balance</Text>
        <Text style={styles.money}>630 &#x20B9;</Text>
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          color: 'green',
          marginVertical: 15,
        }}>
        My Pass
      </Text>
      <View style={{height: 300, width: '90%'}}></View>
      <Footer />
    </ScrollView>
  );
};

export default MyRidePass;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 175,
    marginStart: 155,
    position: 'absolute',
  },
  view2: {
    marginTop: 25,
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
    marginTop: 10,
    paddingBottom: 10,
  },
  money: {
    color: 'red',
    fontSize: 24,
    fontWeight: '600',
    paddingBottom: 10,
  },
});
