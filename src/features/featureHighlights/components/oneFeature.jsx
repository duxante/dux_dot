import '../style/oneFeature.style.css';

const OneFeature = ({ img, text }) => {
  return (
    <div className="oneFeatureHolder">
      {img}
      <p>{text}</p>
    </div>
  );
};

export default OneFeature;
