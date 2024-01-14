import {
    AddPost, AudioScreen, EditProfile, VideoScreen, WelcomeScreen,Profile, Likes
} from '../../containers'
import HomeIcon from 'react-native-vector-icons/AntDesign'
import SalesIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MoreIcon from 'react-native-vector-icons/Feather'
import VendorIcon from 'react-native-vector-icons/FontAwesome'

import Colors from '../colors'
import AllVendor from '../../containers/Vendor/AllVendor'
import ManagerHome from '../../containers/ManagerHome/ManagerHome'
import { ManagerBottomTab } from './ManagerBottomTab'

export const ManagerAppStack = {
    Home: {
        name: 'ManagerHome',
        component: ManagerHome,
        key: 'ManagerHome',
    },

    BottomStack: {
        name: 'BottomStack',
        component: ManagerBottomTab,
        key: 'BottomStack'
    }, 


  
}

export const bottomTabConfig = {
    Home: {
        screenName: "Home",
        component: ManagerHome,
        icon: <HomeIcon size={25} color={Colors.Yellow} name="home" />,
        iconGray: <HomeIcon size={25} color={Colors.White} name="home" />,
        headerShown: false
    },
    Search: {
        screenName: "Sales",
        component: ManagerHome,
        icon: <SalesIcon size={25} color={Colors.Yellow} name="finance" />,
        iconGray: <SalesIcon size={25} color={Colors.White} name="finance" />,
        headerShown: false
    },
    Vendor: {
        screenName: "Vendors",
        component: AllVendor,
        icon: <VendorIcon size={24} color={Colors.Yellow} name="bus" />,
        iconGray: <VendorIcon size={24} color={Colors.White} name="bus" />,
        headerShown: false
    },
    More: {
        screenName: "More",
        component: ManagerHome,
        icon: <MoreIcon size={25} color={Colors.Yellow} name="menu" />,
        iconGray: <MoreIcon size={25} color={Colors.White} name="menu" />,
        headerShown: false
    }
}