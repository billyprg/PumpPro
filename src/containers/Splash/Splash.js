import { Dimensions, StyleSheet, Text, View , Image} from 'react-native'
import React,{useEffect} from 'react'
import Images from '../../config/images'
import { NavigationService } from '../../config'
import { AuthStack } from '../../config/navigationConfig/AuthStack'

const WIDTH= Dimensions.get('screen').width
const Splash = () => {

    useEffect(() => {
        checkUser()
    }, [])
    

    checkUser = async () => {
        // const isWelcomeScreenDisplayed = await AsyncStorage.getItem("onBoarding");
        setTimeout(() => {
          NavigationService.replace('OnBoarding')
        }, 2000);
    }
    

  return (
    <View style={styles.container}>
    <Image source={Images.SplashGif} resizeMode='stretch' style={styles.image} />
</View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width:WIDTH ,
        height: '100%'
        
    }

})