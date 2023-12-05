import './flexibileComponents.style.css';
import MainButton from '../../components/mainButton/mainButton';
import ContainedButtons from './components/diferentButtons';
import ColorTabs from './components/tabs';
import ImageAvatars from './components/usersComponent';
import BasicRating from './components/basicRating';
import SliderSizes from './components/sliderComponent';
import ActionAlerts from './components/successAlert';
import SomeCard from './components/card';
import BasicSwitch from './components/switchButton';
import CheckBox from './components/checkBox';
import RadioButtonLabel from './components/radioButtons';
import MultipleSelect from './components/selectCategory';
import FullNameInput from './components/nameInput';

const FlexibileComponents = () => {
  return (
    <div className="flexibileComponentsHolder">
      <div className="flexibileComponentsMain">
        <div className="flexibileComponentsLeftSide">
          <p>INTERFACE STARTER KIT</p>
          <h1>Flexibile Components</h1>
          <p>
            Pre-set components are easy to customize and use. We collected most
            popular elements. Menu sliders, buttons, inputs, etc. Just dive in!
          </p>
          <MainButton
            customClass="homeViewButton"
            buttonText="Browse compnents >"
          />
        </div>
        <div className="flexibileComponentsRightSide">
          <div className="buttonsComponent">
            <ContainedButtons />
          </div>
          <div className="muiTabs">
            <ColorTabs />
          </div>
          <div className="usersComponent">
            <div className="usersLeft">
              <ImageAvatars />
            </div>
            <div className="reviewsRight">
              <BasicRating />
            </div>
          </div>
          <div className="sliderComponent">
            <SliderSizes />
            <ActionAlerts />
          </div>
          <div className="cardHolder">
            <div className="cardHolderLeftSide">
              <SomeCard />
            </div>
            <div className="cardHolderRightSide">
              <BasicSwitch />
              <CheckBox />
              <RadioButtonLabel />
              <MultipleSelect />
              <FullNameInput />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexibileComponents;
