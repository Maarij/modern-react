// JSX notes: https://jsx-notes.vercel.app/

// 1) Import the React and ReactDOM libraries
import React from 'react'; // defines what a component is and makes them work together
import ReactDOM from 'react-dom/client'; // knows how to translate components to show up in the browser
import App from './App';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen 
root.render(<App />);