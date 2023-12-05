import './orangeDot.style.css';

const OrangeDot = ({ style }) => {
  console.log(style);
  return <span style={style} className="justAnOrangeDot"></span>;
};

export default OrangeDot;
