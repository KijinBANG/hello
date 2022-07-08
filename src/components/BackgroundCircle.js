export const BackgroundCircle = ({ radius, strokeWidth, color }) => {
    return (
        <circle 
            r={radius}
            fill={color}
            stroke='black'
            strokeWidth={strokeWidth}
        />
    );
};