/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Typography from '@material-ui/core/Typography';
import './index.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Список Задач
      </Typography>
      <TodoForm saveTodo={todoText => {
                  const trimmedText = todoText.trim();
                  if (trimmedText.length > 0) {setTodos([...todos, trimmedText])}
      }} />
      <TodoList todos = {todos}/>
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
