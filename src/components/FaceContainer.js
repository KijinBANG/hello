export const FaceContainer = ({children, width, height, centerX, centerY}) => {
    return (
      <svg
        width={width} 
        height={height}
      >
        <g
          // transform={`translate(${centerX}, ${centerY}) rotate(45)`}
          transform={`translate(${centerX}, ${centerY})`}
        >
          { children }
        </g>
      </svg>
    )
};