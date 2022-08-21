import axios from 'axios';
import { taskId, responseTodos } from '../pages/todoscreen/MainPage';

async function RequestImport() {

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
                    responseTodos[i] = response.data.data[i].description
                }
                taskId.clear();
                for (let i = 0; i < responseTodos.length; i++) {
                    taskId.set(responseTodos[i], response.data.data[i]._id)
                }
            }
            else alert('Your ToDo list is empty');
        })
        .catch((error) => {
            console.log(error);
        });
}

export default RequestImport