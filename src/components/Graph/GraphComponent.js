import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {Picker} from '@react-native-picker/picker';
import {Colors, Fonts} from '../../config';

const GraphComponent = ({filter, selectedValue, onValueChange, graph}) => {
  const dummyData = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: ['1000', '500', '200', '50000'],
      },
    ],
  };
  // console.log('graph ayaaaa=>', graph)
  // const graphData = graph
  //   ? graph.map(entry => entry.total_amount)
  //   : [];
  // console.log('graphData===>', graphData);

 
  // const data = {
  //   labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
  //   datasets: [
  //     {
  //       data: graph,
  //     },
  //   ],
  // };
  return (
    <View>
      {/* {filter ? (
        <Picker
          style={styles.pickerStyle}
          selectionColor={Colors.Yellow}
          dropdownIconColor={Colors.Primary}
          selectedValue={selectedValue}
          onValueChange={onValueChange}>
          <Picker.Item label="Daily" value="daily" />
          <Picker.Item label="Monthly" value="monthly" />
          <Picker.Item label="Yearly" value="yearly" />
        </Picker>
      ) : null} */}

      <LineChart
        data={graph ? graph : dummyData}
        width={Dimensions.get('window').width}
        height={220}
        //   yAxisLabel="Sale"
        //   xAxisLabel="Date"
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
      />
    </View>
  );
};

export default GraphComponent;

const styles = StyleSheet.create({
  pickerStyle: {},
});
