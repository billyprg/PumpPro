import React, { useState } from 'react';
import { View, Text, FlatList, Picker, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Colors, Fonts } from '../../config';
import { scale } from 'react-native-size-matters';

const SalesTable = ({item}) => {
   // Default filter is 'daily'

 
  
  // Function to render table rows
  const renderRows = ({ item }) => (
    <DataTable.Row key={item.date}>
      <DataTable.Cell textStyle={styles.row}>{item.date}</DataTable.Cell>
      <DataTable.Cell textStyle={styles.row}>{item.quantity_liter.toFixed()}</DataTable.Cell>
      <DataTable.Cell textStyle={styles.row}>{item.total_amount}</DataTable.Cell>
      <DataTable.Cell textStyle={styles.row}>{item.supervisor_name}</DataTable.Cell>
    </DataTable.Row>
  );

  return (
    <View>
      {/* Filter dropdown */}
     
      {/* Table */}
      <DataTable>
        <DataTable.Header>
          <DataTable.Title textStyle={styles.title}>Date</DataTable.Title>
          <DataTable.Title textStyle={styles.title}>Litres</DataTable.Title>
          <DataTable.Title textStyle={styles.title}>Sale</DataTable.Title>
          <DataTable.Title textStyle={styles.title}>Manager</DataTable.Title>
        </DataTable.Header>

        {/* Render filtered rows */}
        <FlatList
          data={item}
          keyExtractor={(item) => item.date}
          renderItem={renderRows}
        />
      </DataTable>
    </View>
  );
};

export default SalesTable;


const styles = StyleSheet.create({
  title:{
    color:Colors.Black,
    fontFamily: Fonts.Poppins600,
    fontSize:scale(14)
  },
  row:{
    color:Colors.Black,
    fontFamily: Fonts.Poppins600,
    fontSize:scale(12),
    marginLeft:1
  }
});
