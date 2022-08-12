import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MyAppBar from './AppBar';
import { Routes, Route } from 'react-router-dom'
import SignPage from './SignPage';
import MainPage from './MainPage';

const App = () => {
  return (
    <>
      <div className="App">
        <MyAppBar />
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="log" element={<SignPage />} />
      </Routes>
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
