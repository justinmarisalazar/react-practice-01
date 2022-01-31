import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';

const myTheme = createTheme({
  palette: {
    primary: {
      main: '#E7ECEF',
      light: '#F8F8FB',
      contrastText: '#274C77',
    },
    secondary: {
      main: '#274C77',
      contrastText: '#E7ECEF',
    },
    custom: {
      main: '#879CB3',
      contrastText: '#516F91',
    },
    background: {
      paper: '#F8F8FB',
    },
    text: {
      primary: '#274C77',
      secondary: '#516F91',
      light: '#879CB3',
    },
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
