import { Dimensions, StyleSheet, Text, View , Image} from 'react-native'
import React,{Component, useEffect} from 'react'
import Images from '../../config/images'
import { NavigationService } from '../../config'
import { AuthStack } from '../../config/navigationConfig/AuthStack'
import { AppStack, ManagerAppStack } from '../../config/navigationConfig/ManagerAppStack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { connect, useDispatch } from 'react-redux'
import { AuthAction } from '../../store/actions'
import { AdminAppStack } from '../../config/navigationConfig/AdminAppStack'

const WIDTH= Dimensions.get('screen').width

class Splash extends Component {

  componentDidMount() {
      this.checkUser()
  }

  checkUser = async () => {
      const isWelcomeScreenDisplayed = await AsyncStorage.getItem("onBoarding");
      setTimeout(() => {
          if (isWelcomeScreenDisplayed) {
              AsyncStorage.getItem('user').then(user => {
                console.log('user======>', user)
                  if (user) {
                      const parsedData = JSON.parse(user)
                      this.props.SetUser(parsedData)
                      if (user?.user?.role_id == 1) {
                        NavigationService.replace(AdminAppStack.BottomStack.name)
                      } else {
                        NavigationService.replace(ManagerAppStack.ManagerBottomTab.name)
                      }
                      // this.props.SignInSuccess(parsedData)
                    //   NavigationService.replace(AppStack.HomeStack.name)
                  } else {
                      NavigationService.replace(AuthStack.Login.name)
                  }
              })
          }
          else {
              NavigationService.replace(AuthStack.OnBoarding.name);
          }
      }, 3000);
  }

  render() {
      return (
          <View style={styles.container}>
              <Image source={Images.SplashGif} style={styles.image} />
          </View>
      )
  }
}

function mapDispatchToProps(dispatch) {
  return {
      // SignInSuccess: (payload) => { dispatch(AuthAction.SignInSuccess(payload)) }
      SetUser: (payload) => { dispatch(AuthAction.SetUser(payload)) }
  }
}



export default connect(null, mapDispatchToProps)(Splash);

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