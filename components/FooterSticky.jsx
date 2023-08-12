import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

const FooterSticky = () => {
  return (
    <View style={styles.footerContainer}>
      <Image
        source={require('../assests/footer.png')}
        style={styles.footerImage}
      />
    </View>
  );
};

export default FooterSticky;

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 90,
  },
  footerContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    height: 'auto',
  },
});
