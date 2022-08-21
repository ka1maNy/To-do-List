import axios from "axios";
import { taskId } from './../pages/todoscreen/MainPage';

export default function RequestSavetodo(trimmedText) {
    axios
        .post(`${process.env.REACT_APP_BASEURL}task`, {
            "description": trimmedText,
        },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            },
        )
        .then((response) => {
            if (response.data.success === true) {
                taskId.set(trimmedText, response.data.data._id);
            }
        })
        .catch((error) => {
            console.log(error);
        });
}