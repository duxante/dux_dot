import OnePlan from './components/onePlan';
import { typeOfPlans } from '../../data/businessPlans';
import './rightBusinessPlan.style.css';

const RightBusinessPlan = () => {
  return (
    <div className="rightPlanHolder">
      <div className="rightPlanMain">
        <div className="rightPlanUpper">
          <p>PRICING PLAN</p>
          <h1>The Right Plan For Your Business</h1>
          <p>
            Choose the perfect plan for your needs. Always flexibile to grow.
          </p>
        </div>
        <div className="rightPlanBottom">
          {typeOfPlans.map((oneTypePlan) => {
            return (
              <OnePlan
                planImg={oneTypePlan.planImg}
                planImg1={oneTypePlan.planImg1}
                planImg2={oneTypePlan.planImg2}
                typeOfPlan={oneTypePlan.typeOfPackage}
                planCurrency={oneTypePlan.planCurrency}
                planPrice={oneTypePlan.planPrice}
                activePlans={oneTypePlan.activePlans}
                inactivePlans={oneTypePlan.inactivePlans}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightBusinessPlan;
