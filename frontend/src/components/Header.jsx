import React, { useState, useEffect } from 'react';
import CollapsibleMenu from './CollapsibleMenu'; // Assuming CollapsibleMenu is a separate component

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Initial theme state

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    // Optional: Persist theme preference in local storage
    const storedTheme = localStorage.getItem('spiritwallet-theme');
    if (storedTheme) {
      setIsDarkTheme(storedTheme === 'dark');
    }
  }, []); // Empty dependency array to run only on initial render

  const themeClass = isDarkTheme ? 'dark-theme' : '';

  return (
    <div className={`header ${themeClass} header-background`}>
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg stroke">
            <h1 className="mr-3">
              <a className="navbar-brand gold-text" href="/home" style={{ color: 'yellow' }}>
                <i className="fa-solid fa-bible mr-1" aria-hidden="true"></i>
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
