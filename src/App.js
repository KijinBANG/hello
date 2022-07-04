import React from 'react';
import { arc } from 'd3';
import './App.css';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;

const mouthArc = arc()
  .innerRadius(90)
  .outerRadius(100)
  .startAngle(Math.PI / 2)
  .endAngle((3*Math.PI) / 2)

const App = () => {
  return (
    <svg
      width={width} 
      height={height}
    >
      <g
        // transform={`translate(${centerX}, ${centerY}) rotate(45)`}
        transform={`translate(${centerX}, ${centerY})`}
      >
        <circle 
          r={centerY - strokeWidth / 2}
          fill='yellow'
          stroke='black'
          stroke-width={strokeWidth}
        ></circle>
        <circle 
          cx={- eyeOffsetX}
          cy={- eyeOffsetY}
          r={eyeRadius}
        ></circle>
        <circle 
          cx={+ eyeOffsetX}
          cy={- eyeOffsetY}
          r={eyeRadius}
        ></circle>
        <path 
          d={mouthArc()}
        ></path>
      </g>
    </svg>
  );
}

export default App;
