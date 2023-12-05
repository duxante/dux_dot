import { NewStart } from '../../assets';
import './uIKitView.style.css';

const UIKitView = () => {
  return (
    <div className="uIKitHolder">
      <div className="uIKitMain">
        <NewStart />
        <div className="aboutCourses">
          <p>NEW START</p>
          <h1>
            The <span className="dux">DUX</span> UI Kit
          </h1>
          <p>
            Modern UI kit to save your time, boost your creativity. Neat and
            super stylish layout ready to help with your projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UIKitView;
