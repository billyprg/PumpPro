import Login from "../../containers/Login/Login";
import OnBoarding from "../../containers/OnBoarding/OnBoarding";
import OnBoardingThree from "../../containers/OnBoarding/OnBoardingThree";
import OnBoardingTwo from "../../containers/OnBoarding/OnBoardingTwo";
import Splash from "../../containers/Splash/Splash";


export const AuthStack = [
    {
        name: 'Splash',
        component: Splash,
        key: 'Splash',
    },

    {
        name: 'OnBoarding',
        component: OnBoarding,
        key: 'OnBoarding',
    },

    {
        name: 'OnBoardingTwo',
        component: OnBoardingTwo,
        key: 'OnBoardingTwo',
    },

    
    {
        name: 'OnBoardingThree',
        component: OnBoardingThree,
        key: 'OnBoardingThree',
    },

    {
        name: 'Login',
        component: Login,
        key: 'Login',
    },
  
]