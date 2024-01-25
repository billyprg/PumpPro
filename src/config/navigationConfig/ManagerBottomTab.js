import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import Colors from '../colors';
import Fonts from '../fonts';
import metrix from '../metrix';
import { bottomTabConfig } from './ManagerAppStack';
import { Metrix } from '..';
import { scale } from 'react-native-size-matters';

const BottomTabNavigation = createBottomTabNavigator();

// make homeTab a functional component where I can import hooks

export const ManagerBottomTab = () => {
    console.log('manager===>>')
    return (
        <BottomTabNavigation.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: Colors.Primary,
                },
            }}
            initialRouteName={bottomTabConfig.Home.component}>
            {Object.entries(bottomTabConfig).map((tab) => {
                return (
                    <BottomTabNavigation.Screen
                        key={tab[1].screenName}
                        name={tab[1].screenName}
                        component={tab[1].component}
                        options={{
                            headerShown: false,
                            tabBarStyle: {
                                backgroundColor: Colors.Primary,
                                height: Metrix.VerticalSize(70),
                                borderColor:Colors.Secondary,
                                

                            },
                            tabBarLabel: (focus) => {
                                return <TabBarLabel focus={focus} tab={tab[1]} />;
                            },
                            tabBarIcon: (focus) => {
                                return (
                                    <TabBarIcon focus={focus} tab={tab[1]} />
                                );
                            },
                        }}
                    />
                );
            })}
        </BottomTabNavigation.Navigator>
    );
};

const TabBarLabel = (props) => {
    const { tab, focus } = props;
    console.log('tab-====>', tab)
    return (
        <Text style={styles.tabBarLabel}>
            {tab.screenName}
        </Text>
    );
};

const TabBarIcon = (props) => {
    const { tab, focus, count } = props;

    const TabFocused = tab.icon;
    const TabUnfocused = tab.iconGray;

    return (
        <View style={{ marginVertical:5 }} >
            {
                <View>
                    {focus.focused ? (
                        TabFocused
                    ) : (
                        TabUnfocused
                    )}
                    {focus?.focused && <View style={styles.labelFocused} />}
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    tabStyle: {
        backgroundColor: Colors.White,
        borderRadius: 100,
        height: 58,
        width: 58,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.Primary,
        shadowRadius: 10,
        elevation: 10,
    },
    backgroundStyle: {
        height: 70,
        width: 70,
        bottom: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.Primary,
        backgroundColor: 'rgba(240, 213, 213, 0.7)',
        borderRadius: 100,
    },
    normalTab: {
        backgroundColor: Colors.White,
        alignItems: 'center',
    },
    tabBarLabel: {
        fontSize: scale(11),
        color: Colors.White,
        fontFamily: Fonts.Poppins700,
        textAlign: 'center',
        bottom:2
    },
    focusedTabBarLabel: {
        fontSize: metrix.FontMedium,
        color: Colors.Primary,
        fontFamily: Fonts['Roboto-Regular'],
        textAlign: 'center',
    },
    labelFocused: {
        position: "absolute",
        bottom: -10,
        alignSelf: "center",
        marginBottom: 2,
        height: 4,
        width: 4,
        borderRadius: 200,
        backgroundColor: Colors.Yellow
    }
});
