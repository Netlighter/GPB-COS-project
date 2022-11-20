import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { DetailsPageC, ServicesPageC } from './store';
import './styles/index.css';

const router = createBrowserRouter([
  {
    path: '/details/:id',
    element: <DetailsPageC />,
  },
  {
    path: '/',
    element: <ServicesPageC />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
