import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { createBreakpoints } from "@chakra-ui/theme-tools";
// const { Button, Alert } = chakraTheme.components

// const theme = extendBaseTheme({
//   components: {
//     Button,
//     Alert,
//   },
// })

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
