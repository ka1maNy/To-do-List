import axios from 'axios';
import { addTodos, importTodos } from "../store/actions";
import { addTodosID } from "../store/actions";

export function RequestImport() {
    return async function(dispatch) {
    const response = await axios
        .get(`${process.env.REACT_APP_BASEURL}task`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            },
        )
        .catch((error) => {
            console.log(error);
        });
        dispatch(importTodos())
            if (response.data.count !== 0) {
                for (let i = 0; i < response.data.count; i++) {
                    dispatch(addTodos(response.data.data[i].description));
                    dispatch(addTodosID(response.data.data[i]._id));
                }
            }
            else alert('Your ToDo list is empty');
}}
