import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';


import './index.css';
import App from './component/App';
import combineReducers from './reducers';



const store = createStore(combineReducers);

console.log('store' , store);


ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);

