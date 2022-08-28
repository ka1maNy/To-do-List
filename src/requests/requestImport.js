import axios from 'axios';
import { useDispatch } from "react-redux";
import { addTodos } from "../store/actions";
import { addTodosID } from "../store/actions";

async function RequestImport() {
    const dispatch = useDispatch();
    await axios
        .get(`${process.env.REACT_APP_BASEURL}task`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            },
        )
        .then((response) => {
            if (response.data.count !== 0) {
                for (let i = 0; i < response.data.count; i++) {
                    dispatch(addTodos(response.data.data[i].description));
                    dispatch(addTodosID(response.data.data[i].description, response.data.data[i]._id));
                }
            }
            else alert('Your ToDo list is empty');
        })
        .catch((error) => {
            console.log(error);
        });
}

export default RequestImport