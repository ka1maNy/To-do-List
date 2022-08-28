import axios from "axios";
//import { taskId } from './../pages/todoscreen/MainPage';
import { useDispatch } from "react-redux";
import { addTodosID } from "../store/actions";

export default function RequestSavetodo(trimmedText) {
    const dispatch = useDispatch();
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
                dispatch(addTodosID(trimmedText, response.data.data._id))
                //taskId.set(trimmedText, response.data.data._id);
            }
        })
        .catch((error) => {
            console.log(error);
        });
}