import axios from 'axios';
import { taskId, responseTodos } from '../pages/todoscreen/MainPage';

function RequestImport() {

    axios
        .get('https://api-nodejs-todolist.herokuapp.com/task',
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
                console.log(responseTodos)
            }
            else alert('Your ToDo list is empty');
        })
        .catch((error) => {
            console.log(error);
        });
}

export default RequestImport