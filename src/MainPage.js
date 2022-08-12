import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const MainPage = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  return (
    <div className='wrapper'>
      <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
        ToDo List
      </Typography>
      <TodoForm saveTodo={todoText => {
        const trimmedText = todoText.trim();
        if (trimmedText.length > 0) { addTodo(trimmedText) }
      }} />

      <TodoList todos={todos}
        deleteTodo={deleteTodo} />
    </div>
  )
}

export default MainPage