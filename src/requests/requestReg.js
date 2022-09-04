import axios from "axios";
import { regUser } from "../store/actions";

export default function RequestReg(submitFName, submitEmail, submitPass) {
    return async function (dispatch) {
        const response = await axios
            .post(`${process.env.REACT_APP_BASEURL}user/register`, {
                "name": submitFName,
                "email": submitEmail,
                "password": submitPass,
            })
            .catch((error) => {
                console.log(error);
            });
        dispatch(regUser(submitEmail, submitPass, submitFName))
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userEmail', submitEmail);
        localStorage.setItem('loginStatus', 'logged');
        alert(`Hello, ` + response.data.user.name + '. Registration successful!');

    }
}