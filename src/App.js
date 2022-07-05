import React from 'react';
import { BackgroundCircle } from './components/BackgroundCircle';
import { Eyes } from './components/Eyes';
import { FaceContainer } from './components/FaceContainer';
import { Mouth } from './components/Mouth';

const App = ({
  width,
  height,
  centerX,
  centerY,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthRadius,
  mouthWidth
}) => {
  return (
    <FaceContainer 
      width={width}
      height={height}
      centerX={centerX}
      centerY={centerY}
    >
      <BackgroundCircle
        radius={centerY - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <Eyes
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
        eyeRadius={eyeRadius}
      />
      <Mouth
        mouthRadius={mouthRadius}
        mouthWidth={mouthWidth}
      />
    </FaceContainer>
  );
};

export default App;
