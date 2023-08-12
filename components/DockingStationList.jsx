import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DockingStationList = ({navigation, dockings}) => {
  const navigateToMapView = location => {
    navigation.navigate('MapView', {location});
  };
  const renderList = ({item}) => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.imageTouchableOpacity}>
            <Image
              source={{uri: item.Image.uri}}
              resizeMode="cover"
              style={styles.image}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <Text style={styles.stationText}>{item.Docking_StationName}</Text>
            {/* Rating */}
            {/* <Text> Rating:{item.Rating}</Text> */}
            <View style={{flexDirection: 'row'}}>
              {Array.from({length: item.Rating}).map((_, index) => (
                <AntDesign key={index} name="star" size={24} color="brown" />
              ))}
            </View>

            {/* Address */}
            <View style={{flexDirection: 'column', marginVertical: 5}}>
              <Text style={styles.address}>Address</Text>
              <Text style={styles.addressText}>{item.Address}</Text>
            </View>
            {/* Available Vehical */}
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.vehical}>Available Vehicle</Text>
              <Text style={styles.vehicalText}>{item.Available_Vehicle}</Text>
            </View>
            {/* Location */}
            <TouchableOpacity
              style={{flexDirection: 'row', marginBottom: 10}}
              // onPress={() =>
              //   navigateToMapView({
              //     latitude: item.Latitude,
              //     longitude: item.Longitude,
              //   })
              // }
            >
              <Entypo name="map" color="green" size={24} />
              <Text style={styles.location}>Location</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  return (
    <View>
      <FlatList
        data={dockings}
        renderItem={renderList}
        keyExtractor={item => item.Docking_ID}
      />
    </View>
  );
};

export default DockingStationList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '85%',
    alignSelf: 'center',
    borderWidth: 5,
    borderRadius: 15,
    borderColor: 'white',
    marginVertical: 15,
    height: 'auto',
    shadowColor: 'black',
    elevation: 10,
    backgroundColor: 'white',
    marginBottom: 25,
  },
  imageTouchableOpacity: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {width: 150, height: 200, margin: 15, borderRadius: 15},
  stationText: {
    textAlign: 'left',
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 20,
    height: 'auto',
    color: 'black',
  },
  address: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginBottom: 5,
  },
  addressText: {
    color: 'gray',
    height: '45',
    fontSize: 16,
    marginBottom: 10,
  },
  vehical: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginBottom: 5,
  },
  vehicalText: {
    width: 35,
    height: 25,
    color: 'white',
    backgroundColor: 'green',
    flexDirection: 'row',
    borderRadius: 15,
    paddingTop: 2,
    alignSelf: 'center',
    textAlign: 'center',
    marginLeft: 5,
  },
  location: {
    marginHorizontal: 5,
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
});
