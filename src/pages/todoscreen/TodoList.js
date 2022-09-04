import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import RequestDeletetodo from './../../requests/requestDeletetodo';
import { useSelector } from 'react-redux';

const TodoList = ({ todos }) => {
  const dispatch = useDispatch();
  let todosID = useSelector(state => state.todo.todoID)
  return (
    <List>
      {todos.map((todo, index) => (
        <ListItem key={index.toString()} dense button>
          <Checkbox tabIndex={-1} disableRipple />
          <ListItemText primary={todo} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                const deleteID = todosID[todos.indexOf(todo)];
                dispatch(RequestDeletetodo(todo, deleteID));
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
};

export default TodoList;