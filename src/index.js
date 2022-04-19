import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { fetchUsers } from './components/30-redux_Thunk/features/users/usersSlice'
// import store from './components/30-redux_Thunk/store'
// import { Provider } from "react-redux";

// require('./components/30-redux_Thunk/api/server')

// store.dispatch(fetchUsers())

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <App />
    </Provider> */}


      <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);


