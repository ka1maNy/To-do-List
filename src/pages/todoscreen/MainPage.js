import React, { useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Typography from '@material-ui/core/Typography';
import IconButton from '@mui/material/IconButton';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { RequestImport } from './../../requests/requestImport';
import RequestSavetodo from './../../requests/requestSavetodo';

const MainPage = () => {

  const dispatch = useDispatch();
  const todosList = useSelector(state => state.todo.todos);

  const navigateTo = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('loginStatus') !== 'logged') {
      navigateTo("/");
    }
    else {
      dispatch(RequestImport())
    }
  }, [])

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
          if (localStorage.getItem('loginStatus') === 'logged') {
            const trimmedText = todoText.trim();
            if (trimmedText.length > 0) {
              dispatch(RequestSavetodo(trimmedText));
            }
          }
          else alert('You need to Login or Register')
        }} />

      <TodoList todos={todosList} />
    </div>
  )
}

export default MainPage