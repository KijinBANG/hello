import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { range } from 'd3';
import { Face } from './components/Face';
import reportWebVitals from './reportWebVitals';

const width = 166;
const height = 166;

const array = range(10 * 5);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    { array.map(() => (
      <Face
        width={width}
        height={height}
        centerX={width / 2}
        centerY={height / 2}
        strokeWidth={10}
        eyeOffsetX={25}
        eyeOffsetY={30}
        eyeRadius={5 + Math.random() * 15}
        mouthWidth={5 + Math.random() * 10}
        mouthRadius={20 + Math.random() * 15}
      />
    ))}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
