import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Feather from 'react-native-vector-icons/Feather';
import Footer from '../../components/Footer';
const TermsOfUse = ({navigation}) => {
  const [selected, setSelected] = useState(false);
  return (
    <ScrollView>
      <Header />
      <View style={styles.View}>
        <Image
          source={require('../../assests/ovel-bg.png')}
          style={styles.bgImage}
        />
        <View style={styles.container}>
          <Text style={styles.text}>Terms of Use</Text>

          <View style={{marginBottom: 10}}>
            <Text style={styles.descriptionText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              ut eius reprehenderit quos id dolore ea? Perferendis blanditiis
              voluptate laudantium repellendus dolorum ipsam praesentium, unde
              eaque cum quidem omnis, sed eveniet eum officiis magnam. Fuga
              facilis cupiditate exercitationem magni corporis non vero
              dignissimos tenetur delectus! Ratione cupiditate et dolores,
              explicabo ab, atque, cumque voluptas iusto labore ullam veniam
              provident. Enim veritatis vero a minima? Sit nobis assumenda aut
              ipsam asperiores deserunt soluta quia hic placeat.
            </Text>
            <TouchableOpacity
              onPress={() => {
                setSelected(!selected);
              }}
              style={{flexDirection: 'row', marginHorizontal: 10}}>
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
                I Agree
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('KYC')}
              style={styles.touchableOpacitySignIn}>
              <Text style={styles.SignIn}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default TermsOfUse;

const styles = StyleSheet.create({
  View: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  descriptionText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
    textAlign: 'left',
    margin: 5,
    padding: 5,
    marginBottom: 15,
  },
  touchableOpacitySignIn: {
    marginVertical: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
    height: 50,
    paddingHorizontal: 90,
    borderRadius: 25,
    backgroundColor: 'green',
  },
  SignIn: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
