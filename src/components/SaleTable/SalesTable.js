import React, { useState } from 'react';
import { View, Text, FlatList, Picker } from 'react-native';
import { DataTable } from 'react-native-paper';

const SalesTable = ({item}) => {
   // Default filter is 'daily'

 
 
  // Function to render table rows
  const renderRows = ({ item }) => (
    <DataTable.Row key={item.date}>
      <DataTable.Cell>{item.date}</DataTable.Cell>
      <DataTable.Cell>{item.quantity_liter}</DataTable.Cell>
      <DataTable.Cell>{item.total_amount}</DataTable.Cell>
    </DataTable.Row>
  );

  return (
    <View>
      {/* Filter dropdown */}
     
      {/* Table */}
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>Litres</DataTable.Title>
          <DataTable.Title>Sale</DataTable.Title>
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
