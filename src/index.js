import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'
import './index.css';
import { ServicesPageC } from './store';

const router = createBrowserRouter([
  {
    path: "/",
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

