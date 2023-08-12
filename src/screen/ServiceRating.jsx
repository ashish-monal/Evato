import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Star from '../../components/Star';
const ServiceRating = () => {
  const [mangerRating, setManagerRating] = useState(0);

  return (
    <ScrollView style={{flex: 1}}>
      <Header />
      <Text style={styles.title}>Service Rating</Text>

      <View
        style={{
          flexDirection: 'column',
          width: '90%',
          justifyContent: 'center',
          alignContent: 'center',
          alignSelf: 'center',
          marginVertical: 20,
          height: 'auto',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            marginBottom: 15,
          }}>
          <Image
            source={require('../../assests/vehicalone.png')}
            resizeMode="contain"
            style={{width: 175, height: 200, margin: 20}}
          />
          <View style={{flexDirection: 'column', marginVertical: 20}}>
            <Text style={styles.text}>Manager Behaviour</Text>
            <Star />
            <Text style={styles.text}>Cleanliness</Text>
            <Star />
            <Text style={styles.text}>Location</Text>
            <Star />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            marginBottom: 15,
          }}>
          <Image
            source={require('../../assests/vehiclesecond.png')}
            resizeMode="contain"
            style={{width: 175, height: 200, margin: 20}}
          />
          <View style={{flexDirection: 'column', marginVertical: 20}}>
            <Text style={styles.text}>Head Lamp</Text>
            <Star />
            <Text style={styles.text}>Body Dent</Text>
            <Star />
            <Text style={styles.text}>Tyre Condition</Text>
            <Star />
          </View>
        </View>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 15,
            width: '75%',
            flexDirection: 'column',
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            margin: 15,
            textAlign: 'center',
          }}
          placeholder="Submit Feedback"
          placeholderTextColor="black"
          multiline
          numberOfLines={3}
        />
        <TouchableOpacity style={styles.touchableOpacitysubmit}>
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default ServiceRating;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 175,
    marginStart: 155,
    position: 'absolute',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  touchableOpacitysubmit: {
    marginVertical: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
    height: 50,
    borderRadius: 25,
    backgroundColor: 'green',
  },
  submit: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  myStarStyle: {
    color: 'green',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
});
