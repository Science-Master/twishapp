import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Popup from './pages/Popup';
import Services from './pages/Services';
import LoginSignup from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/popup",
    element: <Popup/>,
  },
  {
    path: "/servies",
    element: <Services/>,
  },

  {
    path: "/login",
    element: <LoginSignup/>,
  },
  {
    path: "/register",
    element: <Signup/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
