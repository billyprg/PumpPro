import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar} from "react-native"
import { Colors } from './src/config';
import Route from './src';



const App = () => {

    return (
  
      <View style={{ flex: 1, backgroundColor: Colors.Secondary }}>
        <StatusBar backgroundColor={Colors.Primary} barStyle="light-content" />
        {/* <Loader /> */}
        <Route />
       
      </View>
    )
  
}

export default App;
