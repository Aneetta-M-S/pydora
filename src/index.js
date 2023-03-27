import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import DetailsContextProvider from './contexts/DetailsContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <DetailsContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </DetailsContextProvider>
);


