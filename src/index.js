import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MyAppBar from './AppBar';
import Routing from './routing';

import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './store/rootReducer';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

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
  //<React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

  //</React.StrictMode>
);

//const rootElement = document.getElementById('root');
//ReactDOM.render(<App />, rootElement);
