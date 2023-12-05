import './mainButton.style.css';

const MainButton = ({ buttonText, customClass }) => {
  return (
    <button className={`duxDotButton ${customClass}`}>{buttonText}</button>
  );
};

export default MainButton;
