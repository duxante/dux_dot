import MainButton from '../../components/mainButton/mainButton';
import './forDesigner.style.css';

const ForDesigner = () => {
  return (
    <div className="forDesignerHolder">
      <div className="forDesignerMain">
        <div className="forDesignerBackground">
          <p>PROFESSIONAL KIT</p>
          <h1>For Designers</h1>
          <MainButton customClass="forDesignersButton" buttonText="Workspace" />
        </div>
      </div>
    </div>
  );
};

export default ForDesigner;
