import axios from "axios";
import { deleteTodosID } from "../store/actions";
import { deleteTodos } from './../store/actions';

export default function RequestDeletetodo(todoText, deleteID) {
    return async function(dispatch) {
    const response = await axios
        .delete(`${process.env.REACT_APP_BASEURL}task/${deleteID}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
        .catch((error) => {
            console.log(error);
        });
        if (response.data.success === true) {
            dispatch(deleteTodosID(deleteID))
            dispatch(deleteTodos(todoText))
        }
}}