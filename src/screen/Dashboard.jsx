import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import DockingStationList from '../../components/DockingStationList';
import DockingData from '../../assests/data/docking.json';

const Dashboard = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [dockings, setDockings] = useState(DockingData);

  const Drawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assests/headerBackground.png')}
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
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>
          <Image
            source={require('../../assests/headerName.png')}
            resizeMode="contain"
            style={{
              height: 50,
              flex: 2,
              marginLeft: -50,
            }}
          />
        </View>
      </ImageBackground>
      <View style={styles.inputView}>
        <FontAwesome name="search" size={24} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="Search docking station"
          value={search}
          keyboardType="default"
          returnKeyType="search"
          onChangeText={text => setSearch(text)}
        />
        <Feather name="mic" size={24} color="gray" />
      </View>

      {/* Filter */}
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 15,
          justifyContent: 'space-evenly',
          alignContent: 'center',
          alignItems: 'center',
          // alignSelf: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Fontisto
            name="equalizer"
            size={20}
            color="black"
            style={{transform: [{rotate: '90deg'}]}}
          />
          <TouchableOpacity style={{marginLeft: 15, flexDirection: 'row'}}>
            <Text style={{color: 'green', fontSize: 18, fontWeight: 'bold'}}>
              By State
            </Text>
            <Entypo
              name="chevron-down"
              size={20}
              color="green"
              style={{marginLeft: 10, marginTop: 4}}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{flexDirection: 'row', marginLeft: 15}}>
          <Text style={{color: 'green', fontSize: 18, fontWeight: 'bold'}}>
            By City
          </Text>
          <Entypo
            name="chevron-down"
            size={20}
            color="green"
            style={{marginLeft: 10, marginTop: 4}}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection: 'row', marginLeft: 15}}>
          <Text style={{color: 'green', fontSize: 18, fontWeight: 'bold'}}>
            By Area
          </Text>
          <Entypo
            name="chevron-down"
            size={20}
            color="green"
            style={{marginLeft: 10, marginTop: 4}}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 2}}>
        <DockingStationList dockings={dockings} navigation={navigation} />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  image: {
    height: 260,
    width: '100%',
    marginTop: -75,
  },
  inputView: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: 'gray',
    marginTop: -60,
    backgroundColor: 'white',
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: '80%',
  },
});
