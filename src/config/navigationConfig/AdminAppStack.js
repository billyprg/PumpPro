import {
    AddPost, AudioScreen, EditProfile, VideoScreen, WelcomeScreen,Profile, Likes
} from '../../containers'
import HomeIcon from 'react-native-vector-icons/AntDesign'
import SalesIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MoreIcon from 'react-native-vector-icons/Feather'
import InventoryIcon from 'react-native-vector-icons/FontAwesome6'


import Colors from '../colors'
import AddVendor from '../../containers/Vendor/AddVendor'
import AllVendor from '../../containers/Vendor/AllVendor'
import AdminHome from '../../containers/Admin/AdminHome/AdminHome'
import { AdminBottomTab } from './AdminBottomTab'
import AdminMore from '../../containers/Admin/AdminMore/AdminMore'

export const AdminAppStack = {
    Home: {
        name: 'AdminHome',
        component: AdminHome,
        key: 'AdminHome',
    },

    BottomStack: {
        name: 'BottomStack',
        component: AdminBottomTab,
        key: 'BottomStack'
    }, 

    More: {
        name: 'More',
        component: AdminMore,
        key: 'AdminMore',
    },


  
}

export const bottomTabConfig = {
    Home: {
        screenName: "Home",
        component: AdminHome,
        icon: <HomeIcon size={25} color={Colors.Yellow} name="home" />,
        iconGray: <HomeIcon size={25} color={Colors.White} name="home" />,
        headerShown: false
    },
    Search: {
        screenName: "Sales",
        component: AdminHome,
        icon: <SalesIcon size={25} color={Colors.Yellow} name="finance" />,
        iconGray: <SalesIcon size={25} color={Colors.White} name="finance" />,
        headerShown: false
    },
    Vendor: {
        screenName: "Inventory",
        component: AllVendor,
        icon: <InventoryIcon size={24} color={Colors.Yellow} name="gas-pump" />,
        iconGray: <InventoryIcon size={24} color={Colors.White} name="gas-pump" />,
        headerShown: false
    },
    More: {
        screenName: "More",
        component: AdminMore,
        icon: <MoreIcon size={25} color={Colors.Yellow} name="menu" />,
        iconGray: <MoreIcon size={25} color={Colors.White} name="menu" />,
        headerShown: false
    }
}