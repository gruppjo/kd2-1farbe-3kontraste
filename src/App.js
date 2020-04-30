import React from 'react';
import styles from './App.module.scss';

// ASSETS
import logo from './logo.svg';

// COMPONENTS
import {
  ColorGrid,
  ColorGridBerghain,
  ColorGridBroken,
  ColorGridFont,
  ColorGridFull,
  ColorGridV2,
} from './components';


function App() {
  return (
    <>
      <h1>Itten</h1>
      <ColorGrid></ColorGrid>
      <h1>Itten V2</h1>
      <ColorGridV2></ColorGridV2>
      <h1>IttenFull</h1>
      <ColorGridFull></ColorGridFull>
      <h1>Berghain</h1>
      <ColorGridBerghain></ColorGridBerghain>
      <h1>Berghain All</h1>
      <ColorGridBerghain mode='all'></ColorGridBerghain>
      <h1>This should be a font</h1>
      <ColorGridFont></ColorGridFont>
      <h1>Broken</h1>
      <ColorGridBroken></ColorGridBroken>
      <h1>This should be a font</h1>
      <ColorGridFont></ColorGridFont>
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
