import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const HeaderInside = ({navigation}) => {
  const Drawer = () => {
    navigation.openDrawer();
  };
  return (
    <ImageBackground
      source={require('../assests/headerBackground.png')}
      style={styles.image}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginVertical: 100,
        }}>
        <TouchableOpacity
          onPress={Drawer}
          // onPress={() => navigation.navigate('DrawerNavigation')}
          style={{zIndex: 10, marginTop: 10}}>
          <FontAwesome
            name="bars"
            size={30}
            color="white"
            style={{
              marginLeft: 25,
            }}
          />
        </TouchableOpacity>
        <Image
          source={require('../assests/headerName.png')}
          resizeMode="contain"
          style={{
            height: 50,
            flex: 2,
            marginLeft: -50,
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default HeaderInside;

const styles = StyleSheet.create({
  image: {
    height: 260,
    width: '100%',
    marginTop: -75,
  },
});
