import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodosID } from "../store/actions";

export default function RequestDeletetodo(todoText) {
    const deleteID = useSelector(state => state.todo.id.get(todoText));
    const dispatch = useDispatch();
    axios
        .delete(`${process.env.REACT_APP_BASEURL}task/${deleteID}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
        .then((response) => {
            if (response.data.success === true) {
                dispatch(deleteTodosID(todoText))
            }
        })
        .catch((error) => {
            console.log(error);
        });
}