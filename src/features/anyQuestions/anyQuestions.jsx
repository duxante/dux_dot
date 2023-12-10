import MainButton from '../../components/mainButton/mainButton';
import './anyQuestions.style.css';

const AnyQuestions = () => {
  return (
    <div className="anyQuestionsHolder">
      <div className="anyQuestionsMain">
        <h1>Still Have Questions?</h1>
        <p>Please describe your inquiry to receive most accurate advice</p>
        <MainButton customClass="anyQuestionButton" buttonText="Contact Us" />
      </div>
    </div>
  );
};

export default AnyQuestions;
