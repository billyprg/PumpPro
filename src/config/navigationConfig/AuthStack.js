import Login from "../../containers/Login/Login";
import OnBoarding from "../../containers/OnBoarding/OnBoarding";
import OnBoardingThree from "../../containers/OnBoarding/OnBoardingThree";
import OnBoardingTwo from "../../containers/OnBoarding/OnBoardingTwo";
import Register from "../../containers/Register/Register";
import Splash from "../../containers/Splash/Splash";


export const AuthStack = {
    Splash :
    {
        name: 'Splash',
        component: Splash,
        key: 'Splash',
    },
    OnBoarding :
    {
        name: 'OnBoarding',
        component: OnBoarding,
        key: 'OnBoarding',
    },
    OnBoardingTwo :
    {
        name: 'OnBoardingTwo',
        component: OnBoardingTwo,
        key: 'OnBoardingTwo',
    },

    OnBoardingThree :
    {
        name: 'OnBoardingThree',
        component: OnBoardingThree,
        key: 'OnBoardingThree',
    },
    Login :
    {
        name: 'Login',
        component: Login,
        key: 'Login',
    },
    Register :
    {
        name: 'Register',
        component: Register,
        key: 'Register',
    },
  
}