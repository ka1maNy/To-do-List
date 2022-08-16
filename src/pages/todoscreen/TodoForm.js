import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

const TodoForm = ({ saveTodo }) => {
    const {value, onChange, reset} = useInputState('');
  return (
    <form
    onSubmit={event => {
    event.preventDefault();
    saveTodo(value);
    reset();
    }}>

      <TextField
        variant="outlined"
        placeholder="Добавить задачу"
        margin="normal"
            onChange={onChange}
            value = {value}
      />

   </form>
  );
};


export default TodoForm;