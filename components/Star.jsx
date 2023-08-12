import Stars from 'react-native-stars';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from 'react-native';
import React from 'react';

const Star = () => {
  return (
    <Stars
      default={0}
      count={5}
      half={true}
      starSize={40}
      fullStar={
        <AntDesign name="star" style={[styles.myStarStyle]} size={30} />
      }
      emptyStar={
        <Entypo
          name="star-outlined"
          size={30}
          style={[styles.myStarStyle, styles.myEmptyStarStyle]}
        />
      }
      halfStar={
        <FontAwesome
          name="star-half-full"
          size={30}
          style={[styles.myStarStyle]}
        />
      }
    />
  );
};

export default Star;

const styles = StyleSheet.create({
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
