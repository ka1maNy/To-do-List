import React, { useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import Typography from '@material-ui/core/Typography';
import IconButton from '@mui/material/IconButton';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Stack from '@mui/material/Stack';
import RequestSavetodo from '../../requests/requestSavetodo';
import axios from 'axios';
import { loginStatus } from '../../AppBar';
import { useNavigate } from "react-router-dom";


export let taskId = new Map();
export let responseTodos = [];

const MainPage = () => {

  const navigateTo = useNavigate();

  useEffect(() => {
    if (loginStatus.get('logged') === false) {
      navigateTo("/");
    }
    else {
      axios
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
            importTodo(responseTodos);
            console.log(responseTodos)
            taskId.clear();
            for (let i = 0; i < responseTodos.length; i++) {
              taskId.set(responseTodos[i], response.data.data[i]._id)
            }
          }
        })
        .catch((error) => {
          console.log(error);
          alert('Your ToDo list is empty');
        });
    }
  }, [])

  const { todos, addTodo, deleteTodo, importTodo } = useTodoState([]);

  return (
    <div className='wrapper'>
      <Stack direction="row" spacing={41}>
        <Typography>
        </Typography>
        <Stack direction="row" spacing={35}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            ToDo List
          </Typography>
          <IconButton size="large" color="inherit" /*onClick={handleSubmit} */>
            <ImportContactsIcon />
          </IconButton>
        </Stack>
      </Stack>
      <TodoForm saveTodo={
        todoText => {
          if (loginStatus.get('logged') === true) {
            const trimmedText = todoText.trim();
            if (trimmedText.length > 0) {
              addTodo(trimmedText);
              RequestSavetodo(trimmedText);
            }
          }
          else alert('You need to Login or Register')
        }} />

      <TodoList todos={todos}
        deleteTodo={deleteTodo} />
    </div>
  )
}

export default MainPage