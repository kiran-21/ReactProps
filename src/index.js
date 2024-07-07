import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Props  from './components/Props';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Props img="/img/image1.jpg" text="Sunset image" />
    <Props img="/img/image2.jpg" text="Plant image" />
    <Props img="/img/image3.jpg" text="Some image" />
    <Props img="/img/image4.jpg" text="Random image" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
