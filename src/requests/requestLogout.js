import axios from "axios";
import { loginStatus } from "../AppBar";

export default function RequestLogout(submitEmail, submitPass) {
    axios
        .post(`${process.env.REACT_APP_BASEURL}user/logout`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then((response) => {
            if (response.data.success === true) {
                loginStatus.set('logged', false);
                localStorage.setItem('token', '');
                localStorage.setItem('userEmail', '');
                alert('You logged out');
            }
        })
        .catch((error) => {
            console.log(error);
        });
}