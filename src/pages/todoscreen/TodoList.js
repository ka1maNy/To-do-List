import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { taskId } from './MainPage';
import axios from 'axios';

const TodoList = ({ todos, deleteTodo }) => (
  <List>
    {todos.map((todo, index) => (
      <ListItem key={index.toString()} dense button>
        <Checkbox tabIndex={-1} disableRipple />
        <ListItemText primary={todo} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={() => {
              deleteTodo(index);
              let currentTask = taskId.get(todo)
              axios
                .delete(`https://api-nodejs-todolist.herokuapp.com/task/${currentTask}`,
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                  })
                .then((response) => {
                  if (response.data.success === true) {
                    taskId.delete(todo);
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);

export default TodoList;