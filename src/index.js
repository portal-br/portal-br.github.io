import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Timeline from './components/Timeline';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './static/efect.css';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Timeline/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
