import axios from "axios";
import { logUser } from "../store/actions";

export function RequestLogin(submitEmail, submitPass) {
    return async function(dispatch) {
    const response = await axios
        .post(`${process.env.REACT_APP_BASEURL}user/login`, {
            "email": submitEmail,
            "password": submitPass,
        })
        .catch((error) => {
            console.log(error);
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userEmail', submitEmail);
        localStorage.setItem('loginStatus', 'logged');
        alert(`Welcome back, ` + response.data.user.name + '!');
        dispatch(logUser(submitEmail, submitPass));  
}}