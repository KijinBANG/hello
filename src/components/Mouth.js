import { arc } from 'd3';

export const Mouth = ({mouthRadius, mouthWidth}) => {
    const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((3*Math.PI) / 2);
    return (
      <>
        <circle 
          cx={mouthRadius + mouthWidth / 2}
          r={mouthWidth / 2}
        ></circle>
        <circle 
          cx={-(mouthRadius + mouthWidth / 2)}
          r={mouthWidth / 2}
        ></circle>
        <path 
          d={mouthArc()}
        ></path>
      </>
    )
};