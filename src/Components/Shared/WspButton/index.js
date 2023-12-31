import React from 'react';
import styles from './wspbutton.module.css';
import './fontelloWsp/css/fontello.css';
import { useDarkMode } from '../DarkBtn/darkModeContext';

const WspButton = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=5492477309076&text=%C2%A1Hola!%20Quiero%20saber%20m%C3%A1s%20sobre..."
          className={
            isDarkMode
              ? `${styles.darkBtnWsp} ${styles.darkPulse}`
              : `${styles.btnWsp} ${styles.pulse}`
          }
          id="btn"
          target="_blank"
          rel="noreferrer"
        >
          <i className="icon-whatsapp"></i>
        </a>
      </div>
    </>
  );
};

export default WspButton;
