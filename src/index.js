import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "normalize.css"; 
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFount from './pages/NotFount';
import Home from './pages/Home';
import AllWorks from './pages/AllWorks';
import WorkDetail from './pages/WorkDetail';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFount />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/works', element: <AllWorks /> },
      { 
        path: '/works/:id', 
        element: <WorkDetail />, 
      },
      { 
        path: '/about', 
        element: <About />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
