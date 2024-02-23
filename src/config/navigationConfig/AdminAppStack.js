import {
    AddPost, AudioScreen, EditProfile, VideoScreen, WelcomeScreen,Profile, Likes
} from '../../containers'
import HomeIcon from 'react-native-vector-icons/AntDesign'
import SalesIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MoreIcon from 'react-native-vector-icons/Feather'
import InventoryIcon from 'react-native-vector-icons/FontAwesome6'


import Colors from '../colors'
import AdminHome from '../../containers/Admin/AdminHome/AdminHome'
import { AdminBottomTab } from './AdminBottomTab'
import Expenses from '../../containers/Expenses/Expenses'
import More from '../../containers/More/More'
import Inventory from '../../containers/Inventory/Inventory'
import CurrentRates from '../../containers/CurrentRates/CurrentRates'
import Sales from '../../containers/Sales/Sales'
import { AdminMoreNavigator } from './BottomStacks'
import Rents from '../../containers/Rents/Rents'
import InsightScreen from '../../containers/Admin/AdminHome/InsightScreen'
import Purchase from '../../containers/Purchase/Purchase'

export const AdminAppStack = {
    // Home: {
    //     name: 'AdminHome',
    //     component: AdminHome,
    //     key: 'AdminHome',
    // },

    BottomStack: {
        name: 'BottomStack',
        component: AdminBottomTab,
        key: 'BottomStack'
    }, 



    InsighScreen: {
        name: 'InsighScreen',
        component: InsightScreen,
        key: 'InsighScreen',
    },

    Inventory: {
        name: 'Inventory',
        component: Inventory,
        key: 'Inventory',
    },
 
}

export const MoreStack = {
    More: {
        name: 'More',
        component: More,
        key: 'More',
    },

    Expenses: {
        name: 'Expenses',
        component: Expenses,
        key: 'Expenses',
    },
    CurrentRates: {
        name: 'CurrentRates',
        component: CurrentRates,
        key: 'CurrentRates',
    },
    Rents: {
        name: 'Rents',
        component: Rents,
        key: 'Rents',
    },

    Purchase: {
        name: 'Purchase',
        component: Purchase,
        key: 'Purchase',
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
        component: Sales,
        icon: <SalesIcon size={25} color={Colors.Yellow} name="finance" />,
        iconGray: <SalesIcon size={25} color={Colors.White} name="finance" />,
        headerShown: false
    },
    Inventory: {
        screenName: "Inventory",
        component: Inventory,
        icon: <InventoryIcon size={24} color={Colors.Yellow} name="gas-pump" />,
        iconGray: <InventoryIcon size={24} color={Colors.White} name="gas-pump" />,
        headerShown: false
    },
    More: {
        screenName: "More",
        component: AdminMoreNavigator,
        icon: <MoreIcon size={25} color={Colors.Yellow} name="menu" />,
        iconGray: <MoreIcon size={25} color={Colors.White} name="menu" />,
        headerShown: false
    }
}