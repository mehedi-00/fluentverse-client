import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routers/Router.jsx';
import AuthProvaider from './provider/AuthProvaider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvaider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvaider>
  </React.StrictMode>,
);
