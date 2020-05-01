// REACT, STYLE, STORIES & COMPONENT
import React from 'react';
import styles from './ColorGridV2.module.scss';

// ASSETS

// STORE

// OTHER COMPONENTS
import { ColorGridItem } from '../ColorGridItem';

// CONFIG & DATA

// COMPONENT: ColorGridV2
const ColorGridV2 = (props) => {
  // PROPS
  // const { children } = props;

  // STATE HOOKS

  // STORE

  // EFFECT HOOKS

  // OTHER HOOKS

  // HELPERS, HANDLES, METHODSHOOKS

  // RENDER: ColorGridV2
  return (
    <div className={`${styles.colorGridV2}`}>
       {/* 1ST ROW */}
      {/* GRAY */}
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      {/* COLOR */}
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
      {/* GRAY */}
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>


      {/* 2ND ROW */}
      {/* GRAY */}
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      {/* COLOR */}
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
      {/* GRAY */}
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>

      {/* 3RD ROW */}
      {/* GRAY */}
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      {/* HELL DUNKEL */}
      <div className={styles.yellowLighter}>
        <div className={styles.yellowLighter}>
          <div className={styles.yellowDark}>
            <div className={styles.yellowDark}></div>
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
      <div className={styles.yellowLighter}>
        <div className={styles.yellowLighter}>
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
      {/* GRAY */}
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>


      {/* 4TH ROW */}
      {/* GRAY */}
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
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
      {/* GRAY */}
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>

      {/* 5TH ROW */}
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

      {/* 6TH ROW */}
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

    </div>
  );
};

export default ColorGridV2;
