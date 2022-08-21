import axios from "axios";
import { taskId } from './../pages/todoscreen/MainPage';

export default function RequestDeletetodo(todo, todoId) {
    axios
        .delete(`${process.env.REACT_APP_BASEURL}task/${todoId}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
        .then((response) => {
            if (response.data.success === true) {
                taskId.delete(todo);
            }
        })
        .catch((error) => {
            console.log(error);
        });
}