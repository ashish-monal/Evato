import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {transaction} from '../../assests/data/Transaction';

const Transaction = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(transaction.length / itemsPerPage);
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const renderItem = ({item}) => (
    <View style={styles.tableRow}>
      <Text style={styles.cell}>{item.ID}</Text>
      <Text style={styles.cell}>{item.Date}</Text>
      <Text style={styles.cell}>{item.Amount}</Text>
      <Text style={styles.cell}>{item.Type}</Text>
      <Text style={styles.cell}>{item.Status}</Text>
    </View>
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = transaction.slice(startIndex, startIndex + itemsPerPage);

  return (
    <View>
      <Header />
      <Text style={styles.title}>Transaction History</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>ID</Text>
          <Text style={styles.headerCell}>Date</Text>
          <Text style={styles.headerCell}>Amount</Text>
          <Text style={styles.headerCell}>Type</Text>
          <Text style={styles.headerCell}>Status</Text>
        </View>
        <FlatList
          data={visibleData}
          renderItem={renderItem}
          keyExtractor={item => item.ID}
        />
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
          disabled={currentPage * itemsPerPage >= transaction.length}>
          <Text style={styles.paginationButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.touchableOpacitySignIn}>
        <Text style={styles.SignIn}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Transaction;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 175,
    marginStart: 135,
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
    borderColor: 'green',
    backgroundColor: 'green',
    paddingVertical: 5,
  },
  headerCell: {
    flex: 1,
    padding: 10,
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
    flex: 1,
    padding: 10,
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
});