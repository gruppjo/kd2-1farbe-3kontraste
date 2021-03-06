// REACT, STYLE, STORIES & COMPONENT
import React from 'react';
import styles from './ColorGridBerghain.module.scss';

// ASSETS

// STORE

// OTHER COMPONENTS
import { ColorGridItem } from '../ColorGridItem';

// CONFIG & DATA
let berghain = (mode) => {
  return (
    <>
      {/* 3RD ROW */}
      <div className={mode ? styles.orangeLight : styles.grayLighter }>
        <div className={mode ? styles.orange : styles.grayLight }>
          <div className={mode ? styles.red : styles.gray }>
            <div className={mode ? styles.redDark : styles.grayDark }></div>
          </div>
        </div>
      </div>
      <div className={mode ? styles.greenLighter : styles.grayLighter }>
        <div className={mode ? styles.greenLight : styles.grayLight }>
          <div className={mode ? styles.green : styles.gray }>
            <div className={mode ? styles.greenDark : styles.grayDark }>
            </div>
          </div>
        </div>
      </div>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>

      {/* 4TH ROW */}
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>

      {/* 5TH ROW */}
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>

      {/* 6TH ROW */}
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
    </>
  );
};

// COMPONENT: ColorGridBerghain
const ColorGridBerghain = (props) => {
  // PROPS
  const { mode } = props;
  let building;
  if (mode) {
    building = (
      <section className={styles.building}>
        {berghain(mode)}
      </section>
    );
  }
  else {
    building = berghain(mode);
  }

  // STATE HOOKS

  // STORE

  // EFFECT HOOKS

  // OTHER HOOKS

  // HELPERS, HANDLES, METHODSHOOKS

  // RENDER: ColorGridBerghain
  return (
    <>
      <div className={`${styles.colorGridBerghain}`}>

        {/* 1ST ROW */}
        <div className={styles.orangeLight}>
          <div className={styles.orange}>
            <div className={styles.red}>
              <div className={styles.redDark}></div>
            </div>
          </div>
        </div>
        <ColorGridItem color='green'></ColorGridItem>
        <div className={styles.orangeLight}>
          <div className={styles.orangeLight}>
            <div className={styles.redDark}>
              <div className={styles.redDark}></div>
            </div>
          </div>
        </div>
        <div className={styles.greenLighter}>
          <div className={styles.greenLighter}>
            <div className={styles.greenDark}>
              <div className={styles.greenDark}>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.orangeLight}>
          <div className={styles.orangeLight}>
            <div className={styles.grayLight}>
              <div className={styles.grayLight}></div>
            </div>
          </div>
        </div>
        <div className={styles.greenLighter}>
          <div className={styles.greenLighter}>
            <div className={styles.grayLight}>
              <div className={styles.grayLight}></div>
            </div>
          </div>
        </div>
        <div className={styles.grayLight}>
          <div className={styles.grayLight}>
            <div className={styles.grayLight}>
              <div className={styles.orangeLight}></div>
            </div>
          </div>
        </div>
        <div className={styles.grayLight}>
          <div className={styles.grayLight}>
            <div className={styles.grayLight}>
              <div className={styles.greenLighter}></div>
            </div>
          </div>
        </div>


        {/* 2ND ROW */}
        <ColorGridItem color='gray'></ColorGridItem>
        <ColorGridItem color='blue'></ColorGridItem>
        <div className={styles.grayLighter}>
          <div className={styles.grayLighter}>
            <div className={styles.grayDark}>
              <div className={styles.grayDark}></div>
            </div>
          </div>
        </div>
        <div className={styles.blueLighter}>
          <div className={styles.blueLighter}>
            <div className={styles.blueDark}>
              <div className={styles.blueDark}></div>
            </div>
          </div>
        </div>
        <div className={styles.gray}>
          <div className={styles.gray}>
            <div className={styles.grayLight}>
              <div className={styles.grayLight}></div>
            </div>
          </div>
        </div>
        <div className={styles.blueLighter}>
          <div className={styles.blueLighter}>
            <div className={styles.grayLight}>
              <div className={styles.grayLight}></div>
            </div>
          </div>
        </div>
        <div className={styles.grayLight}>
          <div className={styles.grayLight}>
            <div className={styles.grayLight}>
              <div className={styles.grayLighter}></div>
            </div>
          </div>
        </div>
        <div className={styles.grayLight}>
          <div className={styles.grayLight}>
            <div className={styles.grayLight}>
              <div className={styles.blueLighter}></div>
            </div>
          </div>
        </div>

        {/* BUILDING */}
        { building }
      </div>

      {/* 2ND BUILDING */}
      { !mode && (
        <div className={`${styles.colorGridBerghain}`}>
          { berghain(false)}
          { berghain(false)}
        </div>
        )
      }

    </>
  );
}

export default ColorGridBerghain;
