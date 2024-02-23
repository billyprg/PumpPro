import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GraphComponent from '../../../components/Graph/GraphComponent'
import { GlobalStyle } from '../../../constants/GlobalStyle'
import ScreenNameHeader from '../../../components/Headers/ScreenNameHeader/ScreenNameHeader'
import CustomText from '../../../components/Text/CustomText'
import { verticalScale } from 'react-native-size-matters'
import FutureComponent from '../../../components/Graph/FutureComponent'

const InsightScreen = (props) => {
    const data = props?.route?.params?.data
    console.log('data===>', props?.route?.params)
    const futureData = props?.route?.params?.futureData
  return (
    <SafeAreaView style={GlobalStyle.container}>
        <ScreenNameHeader title={'Insights'} backArrow={true}/>
        <ScrollView>

        
        <View style={styles.inner}>
        <CustomText.HeadingText text={'Sales Graph'}/>
      <GraphComponent graph = {data}  />

        <View style={{marginTop:verticalScale(20)}}>

      <CustomText.HeadingText text={'Future Analysis'}/>
        </View>

        <FutureComponent graph = {futureData}  />

        <View style={{height:verticalScale(20)}} />
      
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default InsightScreen

const styles = StyleSheet.create({
    inner:{
        marginTop:'10%'
    }
})