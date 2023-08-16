import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {MyBookingData} from '../../assests/data/MyBookingData';
import HeaderInside from '../../components/HeaderInside';

const MyBooking = ({navigation}) => {
  const [entitiesPerPage, setEntitiesPerPage] = useState(5);

  const handleEntitiesPerPageChange = value => {
    setEntitiesPerPage(value);
    setCurrentPage(1);
  };

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(MyBookingData.length / itemsPerPage);
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const renderItem = ({item}) => (
    <View style={styles.tableRow}>
      {Object.keys(item).map(key => (
        <TouchableOpacity
          key={key}
          onPress={() => {
            if (key === 'ConditionCheck') {
              navigation.navigate('ConditonCheck');
            } else if (key === 'Rating') {
              navigation.navigate('Rating');
            }
          }}>
          <Text
            style={
              key === 'ConditionCheck' || key === 'Rating'
                ? {
                    color: 'blue',
                    marginLeft: 25,
                    textDecorationLine: 'underline',
                  }
                : styles.cell
            }>
            {item[key]}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const startIndex = (currentPage - 1) * entitiesPerPage;
  const visibleData = MyBookingData.slice(
    startIndex,
    startIndex + entitiesPerPage,
  );

  return (
    <View style={{flex: 1}}>
      <HeaderInside navigation={navigation} />
      <Text style={styles.title}>Booking History</Text>
      <View style={styles.tableContainer}>
        <ScrollView horizontal>
          <View>
            <View style={styles.tableHeader}>
              {Object.keys(MyBookingData[0]).map(key => (
                <Text key={key} style={styles.headerCell}>
                  {key}
                </Text>
              ))}
            </View>
            <FlatList
              data={visibleData}
              renderItem={renderItem}
              keyExtractor={item => item.ID}
            />
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{color: 'gray', fontSize: 18, marginTop: 10}}>
          Show Entities
        </Text>
        <View style={styles.entitiesPerPageButtons}>
          <TouchableOpacity
            style={[
              styles.entitiesPerPageButton,
              (entitiesPerPage == 10) & styles.selectedEntitiesButton,
            ]}
            onPress={() => handleEntitiesPerPageChange(10)}>
            <Text style={styles.entitiesPerPageButtonText}>10</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.entitiesPerPageButton,
              entitiesPerPage === 25 && styles.selectedEntitiesButton,
            ]}
            onPress={() => handleEntitiesPerPageChange(25)}>
            <Text style={styles.entitiesPerPageButtonText}>25</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.entitiesPerPageButton,
              entitiesPerPage === 100 && styles.selectedEntitiesButton,
            ]}
            onPress={() => handleEntitiesPerPageChange(100)}>
            <Text style={styles.entitiesPerPageButtonText}>100</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.pagination}>
        <TouchableOpacity
          style={styles.paginationButton}
          onPress={handlePreviousPage}
          disabled={currentPage === 1}>
          <Text style={styles.paginationButtonText}>Previous</Text>
        </TouchableOpacity>
        <Text style={styles.pageNumber}>{currentPage}</Text>
        <TouchableOpacity
          style={styles.paginationButton}
          onPress={handleNextPage}
          disabled={currentPage * itemsPerPage >= MyBookingData.length}>
          <Text style={styles.paginationButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Dashboard')}
        style={styles.touchableOpacitySignIn}>
        <Text style={styles.SignIn}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyBooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tableContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 100,
    marginStart: 155,
    position: 'absolute',
  },
  table: {
    marginHorizontal: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    height: 450,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'green',
    paddingVertical: 5,
    justifyContent: 'center',
  },
  headerCell: {
    flex: 1,
    padding: 10,
    width: 125,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  cell: {
    marginLeft: 25,
    flex: 1,
    padding: 10,
    width: 100,
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  paginationButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  paginationButtonText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pageNumber: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  touchableOpacitySignIn: {
    marginVertical: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
    height: 50,
    borderRadius: 25,
    backgroundColor: 'green',
  },
  SignIn: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkCell: {
    flex: 1,
    width: 150,
    padding: 10,
    // marginLeft: 35,
    color: 'blue', // Or any color you prefer for links
    textDecorationLine: 'underline',
  },
  entitiesPerPageButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  entitiesPerPageButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#f2f2f2',
  },
  selectedEntitiesButton: {
    backgroundColor: 'green',
  },
  entitiesPerPageButtonText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
