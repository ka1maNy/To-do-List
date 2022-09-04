import axios from "axios";
import { logoutUser } from './../store/actions';

export default function RequestLogout() {
    return async function(dispatch) {
    const response = await axios
        .post(`${process.env.REACT_APP_BASEURL}user/logout`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .catch((error) => {
            console.log(error);
        });
        if (response.data.success === true) {
            dispatch(logoutUser());
            localStorage.setItem('token', '');
            localStorage.setItem('userEmail', '');
            localStorage.setItem('loginStatus', '');
            alert('You logged out');
        }
}}