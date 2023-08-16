import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Pass = props => {
  const [hourPass, setHourPass] = useState(0);
  const [selected, setSelected] = useState(false);
  return (
    <View
      style={[
        styles.view1,
        {borderColor: props.colorSecond, backgroundColor: props.color},
      ]}>
      <View style={{flexDirection: 'column'}}>
        <View style={styles.view2}>
          <Text style={styles.text1}>{props.title}</Text>
          <View
            style={{
              backgroundColor: 'white',
              width: 'auto',
              height: 40,
              borderRadius: 10,
              flexDirection: 'row',
            }}>
            <Image
              source={require('../assests/icon-pass.png')}
              style={{margin: 10}}
            />
            <Text
              style={{
                marginVertical: 10,
                marginEnd: 10,
                fontSize: 18,
                color: props.color,
                fontWeight: '500',
              }}>
              {props.money} &#x20B9;
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 10, marginVertical: 10}}>
          <Text style={{fontSize: 18, color: 'black', textAlign: 'center'}}>
            {props.description}
          </Text>
        </View>
        <View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 25,
              marginVertical: 15,
            }}>
            <TouchableOpacity
              onPress={() => {
                setSelected(!selected);
              }}
              style={{flexDirection: 'row'}}>
              <Feather
                name={selected ? 'check-square' : 'square'}
                size={24}
                color="red"
              />
              <Text
                style={{
                  marginLeft: 10,
                  color: 'red',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Select
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                height: 45,
                borderRadius: 20,
                width: 120,
                marginTop: 5,
                borderColor: 'red',
                backgroundColor: props.colorSecond,
              }}>
              <Entypo
                name="minus"
                size={24}
                color="white"
                style={{marginStart: 15, marginEnd: 15, marginTop: 7.5}}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                  marginEnd: 15,
                  fontWeight: 'bold',
                  marginTop: 7.5,
                }}>
                {hourPass}
              </Text>
              <Entypo
                name="plus"
                size={24}
                color="white"
                style={{marginTop: 7.5}}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Pass;

const styles = StyleSheet.create({
  view1: {
    borderStyle: 'dashed',
    height: 'auto',
    width: '90%',
    marginVertical: 15,
    borderWidth: 2,
    borderRadius: 10,
  },
  view2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: 10,
    marginTop: 10,
    marginEnd: 10,
  },
  text1: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    marginVertical: 10,
  },
});
