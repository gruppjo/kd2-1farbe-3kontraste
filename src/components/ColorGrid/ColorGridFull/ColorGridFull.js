// REACT, STYLE, STORIES & COMPONENT
import React from 'react';
import styles from './ColorGridFull.module.scss';

// ASSETS

// STORE

// OTHER COMPONENTS
import { ColorGridItem } from '../ColorGridItem';

// CONFIG & DATA

// COMPONENT: ColorGridFull
const ColorGridFull = (props) => {
  // PROPS
  // const { children } = props;

  // STATE HOOKS

  // STORE

  // EFFECT HOOKS

  // OTHER HOOKS

  // HELPERS, HANDLES, METHODSHOOKS

  // RENDER: ColorGridFull
  return (
    <div className={`${styles.colorGridFull}`}>
      {/* 1ST ROW */}
      {/* QUALITÄT */}
      <div className={styles.orangeLight}>
        <div className={styles.orange}>
          <div className={styles.red}>
            <div className={styles.redDark}></div>
          </div>
        </div>
      </div>
      <ColorGridItem color='green'></ColorGridItem>
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
      <ColorGridItem></ColorGridItem>
      <ColorGridItem color='blue'></ColorGridItem>
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
      <ColorGridItem color='yellow'></ColorGridItem>
      <ColorGridItem color='green'></ColorGridItem>
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
      <ColorGridItem color='red'></ColorGridItem>
      <ColorGridItem color='blue'></ColorGridItem>
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
      {/* QUALITÄT */}
      <ColorGridItem color='yellow'></ColorGridItem>
      <ColorGridItem color='green'></ColorGridItem>
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


      {/* 6TH ROW */}
      {/* QUALITÄT */}
      <ColorGridItem color='red'></ColorGridItem>
      <ColorGridItem color='blue'></ColorGridItem>
      {/* HELL DUNKEL */}
      <div className={styles.redLighter}>
        <div className={styles.redLighter}>
          <div className={styles.redDark}>
            <div className={styles.redDark}></div>
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
      <div className={styles.red}>
        <div className={styles.red}>
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
            <div className={styles.redLighter}></div>
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

    </div>
  );
};

export default ColorGridFull;
