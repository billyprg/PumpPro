import Axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppAction } from "../../store/actions";
import Store from "../../store";
import { NavigationService } from "..";
import { baseUrl } from "../variables";


/* The following lines will add access token in every request to server */

// let userAccessToken = Store.getState()?.AppReducer?.user?.access_token ? Store.getState()?.AppReducer?.user?.access_token : "";
// Axios.defaults.headers.common['access_token'] = userAccessToken;

// Axios.interceptors.response.use((response) => {
//     console.log('heyy')
//     return response
// }, ({ response }) => {
//     if (response.status == 401) {
//         try {
//             AsyncStorage.removeItem("user").then(() => {
//                 Store.dispatch(AppAction.SignoutSuccess());
//                 NavigationService.reset_0("Signin")
//             })
//             console.log('%c{Error 401}', "color: red", response)
//         }
//         catch (err) {
//             console.log(`%c${err.name}`, "color: red", err?.message)
//         }
//     } else {
//         console.log('oe')
//         let status = response?.status.toString()
//         console.log(`%c${status[0] == "2" ? "Response " : "Error " + status}`, `color: ${status[0] == "2" ? "green" : "red"}`, response)
//     }
//     return response
// })

export default class ApiCaller {

    static Get = (endPoint = "", headers = {}) => {
        return Axios.get(`${baseUrl}${endPoint}`, {
            headers
        }).then((res) => res).catch((err) => err.response)
    }

    static Post = (endPoint = "", body = {}, headers = {}) => {
        console.log('endPoint,baseUrl', endPoint,baseUrl)
        return Axios.post(`${baseUrl}${endPoint}`, body, {
            headers
        }).then((res) => res).catch((err) => err.response)
    }

    static Put = (endPoint = "", body = {}, headers = {}) => {
        return Axios.put(`${baseUrl}${endPoint}`, body, {
            headers
        }).then((res) => res).catch((err) => err.response)
    }
}