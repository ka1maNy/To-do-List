import axios from "axios";
import { addTodos, addTodosID } from "../store/actions";

export default function RequestSavetodo(trimmedText) {
    return async function(dispatch) {
    const response = await axios
        .post(`${process.env.REACT_APP_BASEURL}task`, {
            "description": trimmedText,
        },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            },
        )
        .catch((error) => {
            console.log(error);
        });
        if (response.data.success === true) {
            dispatch(addTodos(trimmedText))
            dispatch(addTodosID(response.data.data._id))
            //taskId.set(trimmedText, response.data.data._id);
        }
}}