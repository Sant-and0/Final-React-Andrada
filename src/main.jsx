import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCUwh9aZtXDRwMbCYASeNcbJksdGBnnGl0",
  authDomain: "react-final-andrada.firebaseapp.com",
  projectId: "react-final-andrada",
  storageBucket: "react-final-andrada.appspot.com",
  messagingSenderId: "94238635094",
  appId: "1:94238635094:web:092a498386666c5910b7f7"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
