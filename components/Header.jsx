import {StyleSheet, View, Image, ImageBackground} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View>
      <ImageBackground
        source={require('../assests/headerBackground.png')}
        style={styles.image}>
        <Image
          source={require('../assests/headerName.png')}
          style={{alignSelf: 'center', marginVertical: 75}}
        />
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    height: 260,
    width: '100%',
  },
});
