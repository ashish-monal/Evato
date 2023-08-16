import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Share,
  Alert,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FooterSticky from '../../components/FooterSticky';
import HeaderInside from '../../components/HeaderInside';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
const Refer = ({navigation}) => {
  // Comman Share
  const shareData = async () => {
    try {
      await Share.share({
        message: 'Share your app refer Id',
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  // Share Post on Facebook
  const handleFacebookShare = async () => {
    const url = 'https://app.evato.app/';
    const facebookAppUrl = `fb://share?text=${encodeURIComponent(url)}`;
    const webUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url,
    )}`;

    try {
      // Try to open the Facebook app
      const canOpen = await Linking.canOpenURL(facebookAppUrl);
      if (canOpen) {
        await Linking.openURL(facebookAppUrl);
      } else {
        // If the Facebook app is not installed, open in browser
        await Linking.openURL(webUrl);
      }
    } catch (error) {
      console.error('Error sharing on Facebook:', error);
    }
  };
  // Share post on Gmail
  const handleSendEmail = async () => {
    const recipient = 'aviashishranjan@gmail.com'; // Replace with the recipient's email address
    const subject = 'Check out this app!';
    const body =
      'Hey, I wanted to share this amazing app with you. Check it out!';

    const emailUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    try {
      const canOpen = await Linking.canOpenURL(emailUrl);
      if (canOpen) {
        await Linking.openURL(emailUrl);
      } else {
        console.error('Cannot open email app:URL cannot be opened');
      }
    } catch (error) {
      console.error('Error opening email app:', error);
    }
  };

  //  Share post on Whatsapp
  const handleWhatsAppShare = async () => {
    const url = 'https://app.evato.app/'; // Replace with your actual URL
    const whatsappAppUrl = `whatsapp://send?text=${encodeURIComponent(url)}`;
    const webUrl = `https://wa.me/?text=${encodeURIComponent(url)}`;

    try {
      const canOpen = await Linking.canOpenURL(whatsappAppUrl);
      if (canOpen) {
        await Linking.openURL(whatsappAppUrl);
      } else {
        await Linking.openURL(webUrl);
      }
    } catch (error) {
      console.error('Error sharing on WhatsApp:', error);
    }
  };

  return (
    <ScrollView style={{flex: 1}}>
      <HeaderInside navigation={navigation} />

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
        <TouchableOpacity onPress={shareData} style={styles.touchableButton}>
          <Text style={styles.referId}>Refer ID - E1008082023</Text>
        </TouchableOpacity>

        <View style={styles.iconView}>
          <TouchableOpacity onPress={handleFacebookShare}>
            <Entypo
              name="facebook-with-circle"
              size={50}
              color="red"
              style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity
          // onPress={handleSendEmail}
          >
            <Entypo
              name="mail-with-circle"
              size={50}
              color="red"
              style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleWhatsAppShare}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red',
                borderRadius: 25,
                width: 50,
                height: 50,
              }}>
              <FontAwesome6 name="whatsapp" size={30} color="white" />
            </View>
          </TouchableOpacity>
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
