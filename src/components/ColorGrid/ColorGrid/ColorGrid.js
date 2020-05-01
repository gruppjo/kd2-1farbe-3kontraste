// REACT, STYLE, STORIES & COMPONENT
import React, { useState, useEffect, useCallback } from 'react';
import styles from './ColorGrid.module.scss';

// ASSETS

// STORE

// OTHER COMPONENTS
import { ColorGridItem } from '../ColorGridItem';

// CONFIG & DATA

// COMPONENT: ColorGrid
const ColorGrid = (props) => {
  // PROPS
  // const { children } = props;
  const [ actives, setActives] = useState([]);
  const [ activeIndex, setActiveIndex] = useState(0);
  const [ activeDirection, setActiveDirection ] = useState('up');

  // STATE HOOKS

  // STORE

  const inAndOut = useCallback(() => {
    const actives = [activeIndex];
    setActives(actives);
    let nextActiveIndex = activeIndex + ( activeDirection === 'up' ? 1 : -1);
    if (nextActiveIndex === 0) {
      setActiveDirection('up');
    }
    else if (nextActiveIndex === 3) {
      setActiveDirection('down');
    }
    setActiveIndex(nextActiveIndex);
    // console.log('runs every second',[activeIndex]);
  }, [activeIndex, activeDirection]);

  const inAndOutPersist = useCallback(() => {
    const actives = [...Array(activeIndex + 1).keys()].map((index) => index);
    setActives(actives);
    let nextActiveIndex = activeIndex + ( activeDirection === 'up' ? 1 : -1);
    if (nextActiveIndex === 0) {
      setActiveDirection('up');
    }
    else if (nextActiveIndex === 3) {
      setActiveDirection('down');
    }
    setActiveIndex(nextActiveIndex);
    // console.log('runs every second',[activeIndex]);
  }, [activeIndex, activeDirection]);

  const outPersist = useCallback(() => {
    // TODO: doesn't work yet, colorGridItem activeClass obviously doesn't overwrite colorClass
    const actives = [activeIndex];
    setActives(actives);
    let nextActiveIndex = activeIndex - 1;
    if (nextActiveIndex < 0) {
      nextActiveIndex = 3;
    }
    setActiveIndex(nextActiveIndex);
    // console.log('runs every second',[activeIndex]);
  }, [activeIndex]);

  // EFFECT HOOKS
  useEffect(() => {
    const interval = setInterval(() => {
      inAndOut();
    }, 1500);
    return () => clearInterval(interval);
  }, [inAndOut]);

  // OTHER HOOKS

  // HELPERS, HANDLES, METHODSHOOKS

  // RENDER: ColorGrid
  return (
    <div className={`${styles.colorGrid}`}>

      {/* 1ST ROW */}
      {/* GRAY */}
      {/* <ColorGridItem active={actives}></ColorGridItem> */}
      <ColorGridItem actives={actives}></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      <ColorGridItem></ColorGridItem>
      {/* COLOR */}
      <ColorGridItem color='yellow'></ColorGridItem>
      <ColorGridItem color='green'></ColorGridItem>
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
      <ColorGridItem color='red'></ColorGridItem>
      <ColorGridItem color='blue'></ColorGridItem>
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

export default ColorGrid;
