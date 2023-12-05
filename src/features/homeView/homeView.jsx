import {
  FigmaIcon,
  HomeHero,
  JsIcon,
  NextIcon,
  TsIcon,
  VercelIcon,
} from '../../assets';
import MainButton from '../../components/mainButton/mainButton';
import './homeView.style.css';

const HomeView = () => {
  return (
    <div className="homeViewHolder">
      <div className="homeViewMain">
        <div className="homeViewLeft">
          <h1 className="createYourWebTitle">
            Create Your Website Today with <span className="dux">DUX</span>
          </h1>
          <p>
            The DUX is built on top of MUI, a powerful library that provides
            flexibile, costumizable and easy-to-use components
          </p>
          <MainButton customClass="homeViewButton" buttonText="Workspace" />
          <p>AVAILABLE FOR</p>
          <div className="workspace">
            <JsIcon />
            <TsIcon />
            <NextIcon />
            <FigmaIcon />
            <VercelIcon />
          </div>
        </div>
        <div className="homeViewRight">
          <HomeHero />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
