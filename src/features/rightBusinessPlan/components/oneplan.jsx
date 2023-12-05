import MainButton from '../../../components/mainButton/mainButton';
import '../style/onePlan.style.css';

const OnePlan = ({
  typeOfPlan,
  planSubtitle,
  planCurrency,
  planPrice,
  planDescription,
  planDownloads,
  planExtension,
  planTutorials,
  planForumSupport,
  planUpdates,
}) => {
  return (
    <div className="onePlanHolder">
      <h3>{typeOfPlan}</h3>
      <p className="packageSubtitle">{planSubtitle}</p>
      <div className="packagePrice">
        <div className="justPrice">
          <p>{planCurrency}</p>
          <h1>{planPrice}</h1>
        </div>
        <p>{planDescription}</p>
      </div>
      <p className="underTheDescription">{planDownloads}</p>
      <hr />
      <p className="underTheDescription">{planExtension}</p>
      <hr />
      <p className="underTheDescription">{planTutorials}</p>
      <hr />
      <p className="underTheDescription">{planForumSupport}</p>
      <hr />
      <p className="lastInTheDescription">{planUpdates}</p>
      <MainButton buttonText="Choose Plan" />
    </div>
  );
};

export default OnePlan;
