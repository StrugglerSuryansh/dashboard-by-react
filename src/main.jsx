import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "@fontsource/ubuntu";

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/index.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ChakraProvider theme={theme}>
     <App />
    </ChakraProvider>
  </StrictMode>
)
