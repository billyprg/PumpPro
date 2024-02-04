import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import Store from './src/store';
import { PaperProvider } from 'react-native-paper';

const AppView = () => {
  return (
    <Provider store={Store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppView);
