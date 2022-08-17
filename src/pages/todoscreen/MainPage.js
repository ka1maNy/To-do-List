import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import Typography from '@material-ui/core/Typography';
import IconButton from '@mui/material/IconButton';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Stack from '@mui/material/Stack';
import RequestSavetodo from '../../requests/requestSavetodo';
import RequestImport from './../../requests/requestImport';
import axios from 'axios';

export let taskId = new Map();
export let responseTodos = [];

const MainPage = () => {

  const { todos, addTodo, deleteTodo, importTodo } = useTodoState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
          importTodo(responseTodos);
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
    //RequestImport();
    //console.log(responseTodos);
    importTodo(responseTodos);
  }

  return (
    <div className='wrapper'>
      <Stack direction="row" spacing={41}>
        <Typography>
        </Typography>
        <Stack direction="row" spacing={35}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            ToDo List
          </Typography>
          <IconButton size="large" color="inherit" onClick={handleSubmit} >
            <ImportContactsIcon />
          </IconButton>
        </Stack>
      </Stack>
      <TodoForm saveTodo={
        todoText => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            addTodo(trimmedText);
            RequestSavetodo(trimmedText);
          }
        }} />

      <TodoList todos={todos}
        deleteTodo={deleteTodo} />
    </div>
  )
}

export default MainPage