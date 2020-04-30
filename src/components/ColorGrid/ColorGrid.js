// REACT, STYLE, STORIES & COMPONENT
import React from 'react';
import styles from './ColorGrid.module.scss';

// ASSETS

// STORE

// OTHER COMPONENTS

// CONFIG & DATA

// COMPONENT: ColorGrid
const ColorGrid = (props) => {
  // PROPS
  // const { children } = props;

  // STATE HOOKS

  // STORE

  // EFFECT HOOKS

  // OTHER HOOKS

  // HELPERS, HANDLES, METHODSHOOKS

  // RENDER: ColorGrid
  return (
    <div className={`${styles.colorGrid}`}>
      {/* <div className={styles.redDark}>
        <div className={styles.red}>
          <div className={styles.orange}>
            <div className={styles.yellow}></div>
          </div>
        </div>
      </div> */}

      {/* 1ST ROW */}
      {/* QUALITÄT */}
      <div className={styles.orangeLight}>
        <div className={styles.orange}>
          <div className={styles.red}>
            <div className={styles.redDark}></div>
          </div>
        </div>
      </div>
      <div className={styles.greenLighter}>
        <div className={styles.greenLight}>
          <div className={styles.green}>
            <div className={styles.greenDark}>
            </div>
          </div>
        </div>
      </div>
      {/* HELL DUNKEL */}
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
      {/* SIMULTAN */}
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
      {/* QUANTITÄT */}
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
      {/* QUALITÄT */}
      <div className={styles.grayLighter}>
        <div className={styles.grayLight}>
          <div className={styles.gray}>
            <div className={styles.grayDark}></div>
          </div>
        </div>
      </div>
      <div className={styles.blueLighter}>
        <div className={styles.blueLight}>
          <div className={styles.blue}>
            <div className={styles.blueDark}></div>
          </div>
        </div>
      </div>
      {/* HELL DUNKEL */}
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
      {/* SIMULTAN */}
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
      {/* QUANTITÄT */}
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

      {/* 3RD ROW */}
      {/* QUALITÄT */}
      <div className={styles.yellowLighter}>
        <div className={styles.yellowLight}>
          <div className={styles.yellow}>
            <div className={styles.yellowDark}></div>
          </div>
        </div>
      </div>
      <div className={styles.greenLighter}>
        <div className={styles.greenLight}>
          <div className={styles.green}>
            <div className={styles.greenDark}></div>
          </div>
        </div>
      </div>
      {/* KOMPLEMENTÄR */}
      <div className={styles.yellowLighter}>
        <div className={styles.blueLight}>
          <div className={styles.yellow}>
            <div className={styles.blueDark}></div>
          </div>
        </div>
      </div>
      <div className={styles.greenLighter}>
        <div className={styles.redLight}>
          <div className={styles.green}>
            <div className={styles.redDark}></div>
          </div>
        </div>
      </div>
      {/* WARM KALT */}
      <div className={styles.yellowLighter}>
        <div className={styles.greenLight}>
          <div className={styles.yellow}>
            <div className={styles.greenDark}></div>
          </div>
        </div>
      </div>
      <div className={styles.greenLighter}>
        <div className={styles.yellowLight}>
          <div className={styles.green}>
            <div className={styles.yellowDark}></div>
          </div>
        </div>
      </div>
      {/* BUNT */}
      <div className={styles.yellowLighter}>
        <div className={styles.greenLight}>
          <div className={styles.blue}>
            <div className={styles.redDark}></div>
          </div>
        </div>
      </div>
      <div className={styles.greenLighter}>
        <div className={styles.blueLight}>
          <div className={styles.red}>
            <div className={styles.yellowLight}></div>
          </div>
        </div>
      </div>

      {/* 4TH ROW */}
      {/* QUALITÄT */}
      <div className={styles.redLighter}>
        <div className={styles.redLight}>
          <div className={styles.red}>
            <div className={styles.redDark}></div>
          </div>
        </div>
      </div>
      <div className={styles.blueLighter}>
        <div className={styles.blueLight}>
          <div className={styles.blue}>
            <div className={styles.blueDark}></div>
          </div>
        </div>
      </div>
      {/* KOMPLEMENTÄR */}
      <div className={styles.redLighter}>
        <div className={styles.greenLight}>
          <div className={styles.red}>
            <div className={styles.greenDark}></div>
          </div>
        </div>
      </div>
      <div className={styles.blueLighter}>
        <div className={styles.yellowLight}>
          <div className={styles.blue}>
            <div className={styles.yellowDark}></div>
          </div>
        </div>
      </div>
      {/* WARM / KALT */}
      <div className={styles.redLighter}>
        <div className={styles.blueLight}>
          <div className={styles.red}>
            <div className={styles.blueDark}></div>
          </div>
        </div>
      </div>
      <div className={styles.blueLighter}>
        <div className={styles.redLight}>
          <div className={styles.blue}>
            <div className={styles.redDark}></div>
          </div>
        </div>
      </div>
      {/* BUNT */}
      <div className={styles.redLighter}>
        <div className={styles.yellowLight}>
          <div className={styles.green}>
            <div className={styles.blueDark}></div>
          </div>
        </div>
      </div>
      <div className={styles.blueLighter}>
        <div className={styles.redLight}>
          <div className={styles.yellow}>
            <div className={styles.greenDark}></div>
          </div>
        </div>
      </div>


      {/* 5TH ROW */}
      <div className={styles.grayLighter}>
        <div className={styles.grayLight}>
          <div className={styles.gray}>
            <div className={styles.grayDark}></div>
          </div>
        </div>
      </div><div className={styles.grayLighter}>
        <div className={styles.grayLight}>
          <div className={styles.gray}>
            <div className={styles.grayDark}></div>
          </div>
        </div>
      </div>
      <div className={styles.grayLighter}>
        <div className={styles.grayLight}>
          <div className={styles.gray}>
            <div className={styles.grayDark}></div>
          </div>
        </div>
      </div><div className={styles.grayLighter}>
        <div className={styles.grayLight}>
          <div className={styles.gray}>
            <div className={styles.grayDark}></div>
          </div>
        </div>
      </div>
      <div className={styles.grayLighter}>
        <div className={styles.grayLight}>
          <div className={styles.gray}>
            <div className={styles.grayDark}></div>
          </div>
        </div>
      </div><div className={styles.grayLighter}>
        <div className={styles.grayLight}>
          <div className={styles.gray}>
            <div className={styles.grayDark}></div>
          </div>
        </div>
      </div>
      <div className={styles.grayLighter}>
        <div className={styles.grayLight}>
          <div className={styles.gray}>
            <div className={styles.grayDark}></div>
          </div>
        </div>
      </div><div className={styles.grayLighter}>
        <div className={styles.grayLight}>
          <div className={styles.gray}>
            <div className={styles.grayDark}></div>
          </div>
        </div>
      </div>

      {/* 6TH ROW */}
      <div className={styles.grayLighter}>
        <div className={styles.grayLight}>
          <div className={styles.gray}>
            <div className={styles.grayDark}></div>
          </div>
        </div>
      </div>
      <div className={styles.grayLighter}>
        <div className={styles.grayLight}>
          <div className={styles.gray}>
            <div className={styles.grayDark}></div>
          </div>
        </div>
      </div>
      <div className={styles.grayLighter}>
        <div className={styles.grayLight}>
          <div className={styles.gray}>
            <div className={styles.grayDark}></div>
          </div>
        </div>
      </div><div className={styles.grayLighter}>
        <div className={styles.grayLight}>
          <div className={styles.gray}>
            <div className={styles.grayDark}></div>
          </div>
        </div>
      </div>
      <div className={styles.grayLighter}>
        <div className={styles.grayLight}>
          <div className={styles.gray}>
            <div className={styles.grayDark}></div>
          </div>
        </div>
      </div><div className={styles.grayLighter}>
        <div className={styles.grayLight}>
          <div className={styles.gray}>
            <div className={styles.grayDark}></div>
          </div>
        </div>
      </div>
      <div className={styles.grayLighter}>
        <div className={styles.grayLight}>
          <div className={styles.gray}>
            <div className={styles.grayDark}></div>
          </div>
        </div>
      </div><div className={styles.grayLighter}>
        <div className={styles.grayLight}>
          <div className={styles.gray}>
            <div className={styles.grayDark}></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ColorGrid;
