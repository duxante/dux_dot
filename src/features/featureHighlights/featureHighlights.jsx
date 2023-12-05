import { featuringHighlights } from '../../data/highlights';
import OneFeature from './components/oneFeature';

import './featureHighlights.style.css';

const FeatureHighlights = () => {
  return (
    <div className="featureHighlightsHolder">
      <div className="featureHighlightsMain">
        <div className="featureHighlightsLeftSide">
          <p>FEATURE HIGHLIGHTS</p>
          <h1>Have Everything You Need</h1>
          <p>
            Let's see what makes our theme super powerful and user-friendly!
          </p>
        </div>
        <div className="featureHighlightsRightSide">
          {featuringHighlights.map((highlight) => {
            return <OneFeature img={highlight.img} text={highlight.text} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlights;
