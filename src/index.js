import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './router/Home';
import Contato from './router/Contato';
import  Sobre from './router/About';
import  Indicacoes from './router/Indication';
import Form from './router/Form';





// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: "/contato",
//     element: <Contato />
//   }
// ])
const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/projeto-react',
        element: <Home />
      },
      {
        path: "/projeto-react/contato",
        element: <Contato />
      },
      {
        path: "/projeto-react/sobre",
        element: <Sobre />
      },
      {
        path: "/projeto-react/indicacoes",
        element: <Indicacoes />
      },

      {
        path: "/projeto-react/Form",
        element: <Form/>
      },
   
   
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
