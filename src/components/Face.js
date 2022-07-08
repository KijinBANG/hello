import React from 'react';
import { BackgroundCircle } from './BackgroundCircle';
import { Eyes } from './Eyes';
import { FaceContainer } from './FaceContainer';
import { Mouth } from './Mouth';

export const Face = ({
  width,
  height,
  centerX,
  centerY,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthRadius,
  mouthWidth, 
  color
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
        color={color}
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
