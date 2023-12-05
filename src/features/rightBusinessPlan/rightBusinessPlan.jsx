import OnePlan from './components/oneplan';
import './onePlan.style.css';

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
                typeOfPlan={oneTypePlan.typeOfPackage}
                planSubtitle={oneTypePlan.packageSubtitle}
                planCurrency={oneTypePlan.packageCurrency}
                planPrice={oneTypePlan.packagePrice}
                planDescription={oneTypePlan.packageDescription}
                planDownloads={oneTypePlan.packageDownloads}
                planExtension={oneTypePlan.packageExtension}
                planTutorials={oneTypePlan.tutorials}
                planForumSupport={oneTypePlan.forumSupport}
                planUpdates={oneTypePlan.updates}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightBusinessPlan;
