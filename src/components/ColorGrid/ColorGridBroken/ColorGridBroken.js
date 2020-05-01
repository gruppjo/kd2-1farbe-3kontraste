// REACT, STYLE, STORIES & COMPONENT
import React from 'react';
import styles from './ColorGridBroken.module.scss';

// ASSETS

// STORE

// OTHER COMPONENTS
import { ColorGridItem } from '../ColorGridItem';

// CONFIG & DATA

// COMPONENT: ColorGridBroken
const ColorGridBroken = (props) => {
  // PROPS
  // const { children } = props;

  // STATE HOOKS

  // STORE

  // EFFECT HOOKS

  // OTHER HOOKS

  // HELPERS, HANDLES, METHODSHOOKS

  // RENDER: ColorGridBroken
  return (
    <div className={`${styles.colorGridBroken}`}>

      {/* 1ST ROW */}
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
      <section className={styles.building}>
        {/* 3RD ROW */}
        <ColorGridItem></ColorGridItem>
        <ColorGridItem></ColorGridItem>
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


      </section>

    </div>
  );
};

export default ColorGridBroken;
