import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const override = {
  breakpoints: {
    mb: '320px',
    pc: '768px',
  }
};

const theme = extendTheme(override);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
