import { CheckIcon, XIcon } from '../../../assets';
import MainButton from '../../../components/mainButton/mainButton';
import '../style/onePlan.style.css';

const OnePlan = ({
  typeOfPlan,
  planPrice,
  activePlans,
  inactivePlans,
  planImg,
  planImg1,
  planImg2,
}) => {
  return (
    <div className="onePlanHolder">
      <div className="packagePrice">
        <h3>{typeOfPlan}</h3>
        <div className="justPrice">
          <h1 className="currency">{planPrice}</h1>
        </div>
      </div>
      <div className="planImages">
        {planImg}
        {planImg1}
        {planImg2}
      </div>
      <div className="plansOptions">
        {activePlans.map((active) => {
          return (
            <p className="plansHolder">
              <CheckIcon /> {active}
            </p>
          );
        })}

        {inactivePlans.map((inactive) => {
          return (
            <p className="plansHolder">
              <XIcon /> {inactive}
            </p>
          );
        })}
      </div>
      <MainButton customClass="planButton" buttonText="Choose Plan" />
    </div>
  );
};

export default OnePlan;
