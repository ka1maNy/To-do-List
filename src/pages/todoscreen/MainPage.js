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
import { addTodos } from '../../store/actions';
import { importTodos } from '../../store/actions';

const MainPage = () => {

  const dispatch = useDispatch();
  const todosList = useSelector(state => state.todo.todos);

  const navigateTo = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('loginStatus') === false) {
      navigateTo("/");
    }
    else {
      dispatch(importTodos())
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
          if (localStorage.getItem('loginStatus') === true) {
            const trimmedText = todoText.trim();
            if (trimmedText.length > 0) {
              dispatch(addTodos(trimmedText));
            }
          }
          else alert('You need to Login or Register')
        }} />

      <TodoList todos={todosList} />
    </div>
  )
}

export default MainPage