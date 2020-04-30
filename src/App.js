import React from 'react';
import styles from './App.module.scss';

// ASSETS
import logo from './logo.svg';

// COMPONENTS
import {
  ColorGrid,
  ColorGridFont
} from './components';


function App() {
  return (
    <>
      <ColorGrid>asdf</ColorGrid>
      <ColorGridFont>asdf</ColorGridFont>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={styles.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
