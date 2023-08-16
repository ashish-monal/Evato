import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {RadioButton} from 'react-native-paper';
import FooterSticky from '../../components/FooterSticky';
import HeaderInside from '../../components/HeaderInside';

const VehicleConditionCheck = ({navigation}) => {
  const [headLampvalue, setHeadLampValue] = useState(null);
  const [bodyDent, setBodyDent] = useState(null);
  return (
    <View style={{flex: 1}}>
      <Header />
      {/* <HeaderInside navigation={navigation} /> */}
      <Text style={styles.title}>Vehicle Condition Check</Text>
      <View style={{flexDirection: 'row', gap: 4}}>
        <View>
          <Image
            source={require('../../assests/vehicalone.png')}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.text}>Bike Model Number - Hero Honda</Text>
          <Text style={styles.text}>Bike Number BR06F 0674</Text>
          <View style={{marginTop: 10}}>
            <Text style={{color: 'gray', fontSize: 16, marginBottom: 10}}>
              Head Lamp
            </Text>
            <RadioButton.Group
              onValueChange={newValue => setHeadLampValue(newValue)}
              value={headLampvalue}>
              <View style={styles.radioView}>
                <RadioButton value="good" />
                <Text style={styles.radioText}>Good</Text>
              </View>
              <View style={styles.radioView}>
                <RadioButton value="fair" />
                <Text style={styles.radioText}>Fair</Text>
              </View>
              <View style={styles.radioView}>
                <RadioButton value="damaged" />
                <Text style={styles.radioText}>Damaged</Text>
              </View>
            </RadioButton.Group>
          </View>

          {/* Body Dent */}
          <View style={{marginTop: 10}}>
            <Text style={{color: 'gray', fontSize: 16, marginBottom: 10}}>
              Body Dent
            </Text>
            <RadioButton.Group
              onValueChange={newValue => setBodyDent(newValue)}
              value={bodyDent}>
              <View style={styles.radioView}>
                <RadioButton value="good" />
                <Text style={styles.radioText}>Good</Text>
              </View>
              <View style={styles.radioView}>
                <RadioButton value="fair" />
                <Text style={styles.radioText}>Fair</Text>
              </View>
              <View style={styles.radioView}>
                <RadioButton value="damaged" />
                <Text style={styles.radioText}>Damaged</Text>
              </View>
            </RadioButton.Group>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('DrawerNavigation')}
        style={styles.touchableOpacitySignIn}>
        <Text style={styles.SignIn}>Submit</Text>
      </TouchableOpacity>
      <FooterSticky />
    </View>
  );
};

export default VehicleConditionCheck;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 150,
    marginStart: 120,
    position: 'absolute',
  },
  image: {
    marginVertical: 75,
    width: 175,
    height: 200,
    margin: 15,
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 200,

    marginVertical: 5,
  },
  touchableOpacitySignIn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'green',
    width: '50%',
    height: 50,
    marginVertical: 15,
    borderRadius: 25,
    marginBottom: 25,
  },
  SignIn: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
  radioText: {fontSize: 16, marginLeft: 5},
  radioView: {flexDirection: 'row', marginTop: -5},
});
