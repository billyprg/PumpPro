import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {Picker} from '@react-native-picker/picker';
import {Colors, Fonts, Metrix} from '../../config';
import {scale, verticalScale} from 'react-native-size-matters';

const FutureComponent = ({graph}) => {
  const dummyData = {
    labels: [
      'Jan',
      'Feb',
      'March',
      'April',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
    ],
    datasets: [
      {
        data: ['50.25', '95', '141', '199','100','150','40','45','46','47'],
      },
    ],
  };

  console.log('future==>', graph);
  // const graphData = graph.future-data.map(entry => entry.total_amount);

  const graphData = graph['future-data'].map(entry => entry.total_amount);


  // let graphData = graph?.map(item => item.sale_in_rs);
  // // : [];
  // console.log('graphData===>', graphData);

  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: graphData,
      },
    ],
  };
  return (
    <View style={{alignItems: 'center', marginVertical: verticalScale(0)}}>
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
        data={graph ? data : dummyData}
        // data={dummyData}
        width={Dimensions.get('window').width-10}
        height={verticalScale(330)}
        
        verticalLabelRotation={30}
        // xAxisLabel="Date"
        // chartConfig={{
        //   backgroundColor: '#e26a00',
        //   backgroundGradientFrom: Colors.White,
        //   backgroundGradientTo: Colors.White,
        //   decimalPlaces: 0, // optional, defaults to 2dp
        //   color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Black color for lines
        //   labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

        //   style: {
        //     borderRadius: 16,
        //   },
        //   // propsForDots: {
        //   //   r: '6',
        //   //   strokeWidth: '2',
        //   //   stroke: '#ffa726',
        //   // },
        //   propsForDots: {
        //     r: '6',
        //     strokeWidth: '2',
        //     stroke: '#d94826', // Color for dots
        //   },
        //   propsForBackgroundLines: {
        //     strokeWidth: 1,
        //     stroke: '#000000', // Black color for lines
        //   },
        // }}
        // bezier
        chartConfig={{
          // backgroundGradientFrom: 'yellow',
          // backgroundGradientFromOpacity: 0.5,
          // backgroundGradientTo: 'lightgreen',
          // backgroundGradientToOpacity: 1,
          propsForLabels:{
            fontFamily:Fonts.Poppins800,
            fontSize:scale(9),
            
          },
          backgroundGradientFrom: Colors.Primary, // Your primary color
          backgroundGradientFromOpacity: 1,
          backgroundGradientTo: Colors.Yellow, // Your yellow color
          backgroundGradientToOpacity: 1,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Black color for lines
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          
          // color: () => 'red',
          barPercentage: 0.6,
          propsForDots: {
            r: '5',
            strokeWidth: '3',
            stroke: 'black',
          },
        }}
        style={{borderRadius:scale(10)}}
        withInnerLines={false}
        // withShadow={false}
        getDotColor={() => Colors.Yellow}
        // hidePointsAtIndex={[3]}
        // contentInset={{ left: 20, right: 20 }}
        // formatXLabel={}
        bezier
        
      />
    </View>
  );
};

export default FutureComponent;

const styles = StyleSheet.create({
  pickerStyle: {},
});
