import React from 'react';
import ReactDOM from 'react-dom';
import './cssFiles/index.css';
import App from './components/App';
import Post from './components/Post';
import Content from './components/Content';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Post name="This is function based"/>
    <Content/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
