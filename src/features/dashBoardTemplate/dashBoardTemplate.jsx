import { MinimalDash } from '../../assets';
import MainButton from '../../components/mainButton/mainButton';
import './dashBoardTemplate.style.css';

const DashBoardTemplate = () => {
  return (
    <div className="dashBoardTemplateHolder">
      <div className="dashBoardTemplateMain">
        <div className="leftDashboard">
          <p>PERFECT COMBINATION</p>
          <h1>Looking For The Perfect Dashboard Template?</h1>
          <p>
            Minimal UI Kit is a professional dashboarde used by many of our
            clients
          </p>
          <MainButton
            customClass="dashboardButton"
            buttonText="Visit Minimal Dashboard"
          />
        </div>
        <div className="rightDashboard">
          <MinimalDash />
        </div>
      </div>
    </div>
  );
};

export default DashBoardTemplate;
