import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { range } from 'd3';
import { Face } from './components/Face';
import reportWebVitals from './reportWebVitals';

const width = 166;
const height = 166;

const array = range(10 * 5);
const arr = ['gold', 'yellow', 'lightYellow', 
            'lemonChiffon', 'lightGoldenrodYellow', 'PapayaWhip', 
            'moccasin', 'peachPuff', 'paleGoldenrod', 
            'Khaki', 'DarkKhaki'];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    { array.map(() => (
      <Face
        id='face'
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
        color={arr[Math.floor(Math.random() * arr.length)]}
      />
    ))}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
