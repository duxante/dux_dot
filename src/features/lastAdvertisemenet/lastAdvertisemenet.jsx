import MainButton from '../../components/mainButton/mainButton';
import './lastAdvertisemenet.style.css';

const LastAdvertisemenet = () => {
  return (
    <div className="lastAdvertisementHolder">
      <div className="lastAdvertisementMain">
        <div className="lastAdvertisementBackground">
          <div className="lastAdvertisementOverlay"></div>
          <div className="lastAdvertisementInnerHolder">
            <p>Start Now</p>
            <h1>Create Your Website Today</h1>
            <MainButton
              customClass="lastAdvertisementButton"
              buttonText="Purchase Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastAdvertisemenet;
