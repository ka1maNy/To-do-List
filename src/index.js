import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MyAppBar from './AppBar';
import Routing from './routing';

const App = () => {
  return (
    <>
      <div className="App">
        <MyAppBar />
        <Routing />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
//const rootElement = document.getElementById('root');
//ReactDOM.render(<App />, rootElement);
