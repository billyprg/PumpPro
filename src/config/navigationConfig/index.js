import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './AuthStack';
import { RootStack } from './RootStack';
export const MainStackNavigator = () => {
    const MainStackNavigator = createNativeStackNavigator();
    return (
        <MainStackNavigator.Navigator
            initialRouteName={AuthStack.Splash}
            screenOptions={{
                headerShown: false
            }}>
            {Object.entries(RootStack).map((screen) => {
                return <MainStackNavigator.Screen
                    key={screen[1].key}
                    name={screen[1].name}
                    component={screen[1].component}
                />
            })}
        </MainStackNavigator.Navigator>
    );
};