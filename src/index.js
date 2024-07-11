import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Props from './components/Props';
import reportWebVitals from './reportWebVitals';
// import ConditionalRendering from './components/ConditionalRendering';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <h1>This is Conditional Rendering of props Section</h1>
    <h1>This is props in React JS</h1>,
    <Props img="/img/image1.jpg" text="Sunset image" />
    <Props img="/img/image2.jpg" text="Plant image" />
    <Props img="/img/image3.jpg" text="Some image" />
    <Props img="/img/image4.jpg" text="Random image" />
    
    {/* <ConditionalRendering setup line upvotes={90}/> */}
    {/* <ConditionalRendering  line upvotes = {258}/>  */}
    {/* above line the setup value is not passing in the props, 
    by conditional rendering we can avoid the blank space left by the setup during rendering..see the component*/}
    {/* to pass the number pass inside the curly brackets */}
    {/* <ConditionalRendering setup line upvotes={200}/> */}
  </React.StrictMode>
);


reportWebVitals();
