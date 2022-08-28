import axios from "axios";

export default function RequestReg(submitFName, submitEmail, submitPass) {
    axios
        .post(`${process.env.REACT_APP_BASEURL}user/register`, {
            "name": submitFName,
            "email": submitEmail,
            "password": submitPass,
        })
        .then((response) => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userEmail', submitEmail);
            localStorage.setItem('loginStatus', true);
            alert(`Hello, ` + response.data.user.name + '. Registration successful!');
        })
        .catch((error) => {
            console.log(error);
        });
}