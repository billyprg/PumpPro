import {
    AddPost, AudioScreen, EditProfile, VideoScreen, WelcomeScreen,Profile, Likes
} from '../../containers'
import HomeIcon from 'react-native-vector-icons/AntDesign'
import ChatIcon from 'react-native-vector-icons/Ionicons'
import ProfileIcon from 'react-native-vector-icons/Feather'

import Colors from '../colors'
import Home from '../../containers/Home/Home'
import { BottomTab } from './BottomTab'
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
        screenName: "Search",
        component: Home,
        icon: <HomeIcon size={25} color={Colors.Yellow} name="search1" />,
        iconGray: <HomeIcon size={25} color={Colors.White} name="search1" />,
        headerShown: false
    },
    Chat: {
        screenName: "Chat",
        component: Home,
        icon: <ChatIcon size={20} color={Colors.Yellow} name="chatbubble-outline" />,
        iconGray: <ChatIcon size={25} color={Colors.White} name="chatbubble-outline" />,
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