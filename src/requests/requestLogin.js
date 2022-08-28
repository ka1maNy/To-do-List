import axios from "axios";

export default async function RequestLogin(submitEmail, submitPass) {
    axios
        .post(`${process.env.REACT_APP_BASEURL}user/login`, {
            "email": submitEmail,
            "password": submitPass,
        })
        .then((response) => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userEmail', submitEmail);
            localStorage.setItem('loginStatus', true);
            alert(`Welcome back, ` + response.data.user.name + '!');
        })
        .catch((error) => {
            console.log(error);
        });
}