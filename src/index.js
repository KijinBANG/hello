import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const width = 960;
const height = 500;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/*
  <React.StrictMode>
    <App />
  </React.StrictMode>
  */}
    <App 
      width={width}
      height={height}
      centerX={width / 2}
      centerY={height / 2}
      strokeWidth={20}
      eyeOffsetX={90}
      eyeOffsetY={100}
      eyeRadius={40}
      mouthWidth={20}
      mouthRadius={140}
    />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
