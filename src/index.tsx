import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { baseApi } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ApiProvider api={baseApi}>
          <App />
        </ApiProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
