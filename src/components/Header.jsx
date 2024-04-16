import React, { useState, useEffect, useRef } from 'react';
import CollapsibleMenu from './CollapsibleMenu';

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // State for theme toggle
  const textElementRef = useRef(null); // Ref for the typing text element

  // Simulate typing effect using useEffect
  useEffect(() => {
    const textElement = textElementRef.current;
    if (textElement) {
      const text = textElement.textContent.trim().split('');
      let newString = "";

      textElement.textContent = '|';

      setTimeout(() => {
        textElement.style.opacity = 1;
        for (let i = 0; i < text.length; i++) {
          setTimeout(() => {
            newString += text[i];
            textElement.textContent = newString;
          }, i * 200); // Adjust typing speed here
        }
      }, 1500);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`header ${isDarkTheme ? 'dark-theme' : ''}`}>
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg stroke">
            <h1>
              <a className="navbar-brand gold-text" href="/home" style={{color: 'yellow'}}>
                <i className="fa-solid fa-bible mr-1" aria-hidden="true" />
                SpiritWallet
              </a>
            </h1>
            <button
              className="navbar-toggler collapsed bg-gradient"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars" />
              <span className="navbar-toggler-icon fa icon-close fa-times" />
            </button>
            <CollapsibleMenu />
            <div className="cont-ser-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input
                      type="checkbox"
                      id="checkbox"
                      checked={isDarkTheme}
                      onChange={toggleTheme}
                    />
                    <div className="mode-container">
                      <i className="gg-sun" />
                      <i className="gg-moon" />
                    </div>
                  </label>
                </div>
              </nav>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
