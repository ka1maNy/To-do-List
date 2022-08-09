import React from 'react';
import ReactDOM from 'react-dom/client';
import Typography from '@material-ui/core/Typography';
import './index.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';

const App = () => {
  const {todos, addTodo, deleteTodo} = useTodoState([]);
  
  return (
    <div className="App">

      <Typography component="h1" variant="h2">
                  Список Задач
      </Typography>
      
      <TodoForm saveTodo={todoText => {
                const trimmedText = todoText.trim();
                if (trimmedText.length > 0) 
                {addTodo(trimmedText)}
      }} />

      <TodoList todos = {todos}
                deleteTodo={deleteTodo}/>
    
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);
//const rootElement = document.getElementById('root');
//ReactDOM.render(<App />, rootElement);
