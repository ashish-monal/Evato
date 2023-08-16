import {StyleSheet, Image, Text, View, ScrollView} from 'react-native';
import React from 'react';
import FooterSticky from '../../components/FooterSticky';
import HeaderInside from '../../components/HeaderInside';

const Support = ({navigation}) => {
  return (
    <>
      <ScrollView style={{flex: 1}}>
        <HeaderInside navigation={navigation} />
        <View style={styles.View}>
          <Image
            source={require('../../assests/ovel-bg.png')}
            style={styles.bgImage}
          />
          <View style={styles.container}>
            <Text style={styles.text}>Support</Text>
            <View>
              <Image
                source={require('../../assests/support.png')}
                style={styles.support}
                resizeMode="contain"
              />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailsText}>
                Support Number - 6291276506
              </Text>
              <Text style={styles.detailsText}>
                Technical Support Number - 9429693097
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <FooterSticky />
    </>
  );
};

export default Support;

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
    backgroundColor: '#EAF4F0',
    height: 'auto',
    width: '100%',
  },
  text: {
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  detailsContainer: {
    margin: 20,
    marginRight: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsText: {
    fontSize: 18,
    color: 'gray',
  },
  support: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    height: 300,
  },
});
