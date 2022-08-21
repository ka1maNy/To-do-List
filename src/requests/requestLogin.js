import axios from "axios";
import { loginStatus } from './../AppBar';

export default async function RequestLogin(submitEmail, submitPass) {
    axios
        .post(`${process.env.REACT_APP_BASEURL}user/login`, {
            "email": submitEmail,
            "password": submitPass,
        })
        .then((response) => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userEmail', submitEmail);
            loginStatus.set('can login', true);
            alert(`Welcome back, ` + response.data.user.name + '!');
        })
        .catch((error) => {
            loginStatus.set('can login', false);
            console.log(error);
        });
}