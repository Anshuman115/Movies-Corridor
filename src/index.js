import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import './index.css';
// import createRoot from 'react-dom/client';

import ToggleColorModeProvider from './utils/ToggleColorMode';

import App from './components/App';
// redux
import store from './app/store';

// const theme = createTheme({});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ToggleColorModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleColorModeProvider>
  </Provider>,
);

// ReactDOM.render(
//   <Provider store={store}>
//     <ThemeProvider theme={theme}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ThemeProvider>
//   </Provider>,
//   document.getElementById('root'),
// );
