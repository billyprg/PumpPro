import {
    AddPost, AudioScreen, EditProfile, VideoScreen, WelcomeScreen,Profile, Likes
} from '../../containers'
import HomeIcon from 'react-native-vector-icons/AntDesign'
import SalesIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import ProfileIcon from 'react-native-vector-icons/Feather'

import Colors from '../colors'
import Home from '../../containers/Home/Home'
import { BottomTab } from './BottomTab'
import AddVendor from '../../containers/Vendor/AddVendor'
import AllVendor from '../../containers/Vendor/AllVendor'
export const AppStack = {
    Home: {
        name: 'Home',
        component: Home,
        key: 'Home',
    },

    HomeStack: {
        name: 'HomeStack',
        component: BottomTab,
        key: 'HomeStack'
    }, 
  
}

export const homeTabConfig = {
    Home: {
        screenName: "Home",
        component: Home,
        icon: <HomeIcon size={25} color={Colors.Yellow} name="home" />,
        iconGray: <HomeIcon size={25} color={Colors.White} name="home" />,
        headerShown: false
    },
    Search: {
        screenName: "Sales",
        component: Home,
        icon: <SalesIcon size={25} color={Colors.Yellow} name="finance" />,
        iconGray: <SalesIcon size={25} color={Colors.White} name="finance" />,
        headerShown: false
    },
    Chat: {
        screenName: "AddVendor",
        component: AllVendor,
        icon: <SalesIcon size={25} color={Colors.Yellow} name="finance" />,
        iconGray: <SalesIcon size={25} color={Colors.White} name="finance" />,
        headerShown: false
    },
    Profile: {
        screenName: "Profile",
        component: Home,
        icon: <ProfileIcon size={25} color={Colors.Yellow} name="user" />,
        iconGray: <ProfileIcon size={25} color={Colors.White} name="user" />,
        headerShown: false
    }
}