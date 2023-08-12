import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import FooterSticky from '../../components/FooterSticky';
const Refer = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <Header />
      <View style={styles.View}>
        <View>
          <Text style={styles.referText}>Refer a Friend</Text>
        </View>
        <View style={styles.referImage}>
          <Image source={require('../../assests/refer.png')} />
        </View>
        <Text style={styles.earnText}>
          Earn Cash Offers for Referring Friends!
        </Text>
        <TouchableOpacity style={styles.touchableButton}>
          <Text style={styles.referId}>Refer ID - E1008082023</Text>
        </TouchableOpacity>

        <View style={styles.iconView}>
          <Entypo
            name="facebook-with-circle"
            size={50}
            color="red"
            style={styles.logo}
          />
          <Entypo
            name="instagram-with-circle"
            size={50}
            color="red"
            style={styles.logo}
          />
          <Entypo name="youtube-with-circle" size={50} color="red" />
        </View>
      </View>
      <FooterSticky />
    </ScrollView>
  );
};

export default Refer;

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
  referImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
    marginTop: 75,
  },
  earnText: {
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 60,
    color: 'green',
  },
  touchableButton: {
    backgroundColor: 'green',
    borderRadius: 20,
    height: 60,
    marginHorizontal: 40,
    marginVertical: 20,
  },
  referId: {
    color: 'white',
    fontSize: 20,
    paddingVertical: 14,
    textAlign: 'center',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {
    marginRight: 10,
  },
});
