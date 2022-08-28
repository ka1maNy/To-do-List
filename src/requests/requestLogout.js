import axios from "axios";

export default function RequestLogout() {
    axios
        .post(`${process.env.REACT_APP_BASEURL}user/logout`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then((response) => {
            if (response.data.success === true) {
                localStorage.setItem('token', '');
                localStorage.setItem('userEmail', '');
                localStorage.setItem('loginStatus', false);
                alert('You logged out');
            }
        })
        .catch((error) => {
            console.log(error);
        });
}