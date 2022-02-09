import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';


import './index.css';
import App from './component/App';
import movies from './reducers';



const store = createStore(movies);
console.log(store);
console.log("before getstate" , store.getState());



store.dispatch({
  type: 'ADD_MOVIES',
  movies: [{name: "superman"}]
});


console.log("after getstate" , store.getState());


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

