import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MoreStack } from './AdminAppStack';


//Admin More 
export const AdminMoreNavigator = () => {
    const AdminMoreNavigator = createNativeStackNavigator();
    return (
        <AdminMoreNavigator.Navigator
            initialRouteName={MoreStack.More.name}
            screenOptions={{
                headerShown: false
            }}>
            {Object.entries(MoreStack).map((screen) => {
                return <AdminMoreNavigator.Screen
                    key={screen[1].key}
                    name={screen[1].name}
                    component={screen[1].component}
                />
            })}
        </AdminMoreNavigator.Navigator>
    );
};

// export const HomeNavigator = () => {
//     const HomeNavigator = createNativeStackNavigator();
//     return (
//         <HomeNavigator.Navigator
//             initialRouteName={HomeStack.VideoScreen.name}
//             screenOptions={{
//                 headerShown: false
//             }}>
//             {Object.entries(HomeStack).map((screen) => {
//                 return <HomeNavigator.Screen
//                     key={screen[1].key}
//                     name={screen[1].name}
//                     component={screen[1].component}
//                 />
//             })}
//         </HomeNavigator.Navigator>
//     );
// };