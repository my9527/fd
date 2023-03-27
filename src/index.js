import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
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

const _App = () => (
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <App />
    </ChakraProvider>
  </React.StrictMode>
)

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <_App />);
} else {
  const root = createRoot(rootElement);
  root.render(<_App />);
}

reportWebVitals();
