import OrangeDot from '../../components/orangeDot/orangeDot';
import './footerDuxDot.style.css';

const FooterDuxDot = () => {
  return (
    <div className="duxDotHolder">
      <div className="duxDotMain">
        <div className="nameAndDot">
          <p>DUX</p>
          <OrangeDot
            style={{
              position: 'relative',
              top: '-18px',
              height: '20px',
              width: '20px',
            }}
          />
        </div>
        <div className="outro">
          <p>© 2023. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default FooterDuxDot;
