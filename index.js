import React, { useEffect } from "react"
import { AppRegistry, KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Colors, Constants } from './src/config';
import { Provider } from "react-redux"
import Store from "./src/store";
import AsyncStorage from "@react-native-async-storage/async-storage";


const AppView = () => {

    useEffect(() => {

        /* Below we are adding temporary user data in AsyncStorage for login
          purpose and validating in Middleware while login.
          Make sure to remove this when using this boiler plate in 
          your project */

        AsyncStorage.setItem("TempUser", JSON.stringify(Constants.TempUser));
        result =  AsyncStorage.getItem("TempUser")
      

    }, []);

    return (
        Platform.OS == "ios" ?
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Secondary }}>
                    <Provider store={Store}>
                        <App />
                    </Provider>
            </SafeAreaView>
            :
            <Provider store={Store}>
                <App />
            </Provider>
    )
}

AppRegistry.registerComponent(appName, () => AppView); 
// TrackPlayer.registerPlaybackService(() => require('./service'));
