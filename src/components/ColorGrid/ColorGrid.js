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
  const { children } = props;

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
      <div className={styles.yellow}>
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
      <div className={styles.greenDark}>
        <div className={styles.green}>
          <div className={styles.greenLight}>
            <div className={styles.greenLighter}>
            </div>
          </div>
        </div>
      </div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>

      <div className={styles.blueDark}>
        <div className={styles.blue}>
          <div className={styles.blueLight}>
            <div className={styles.blueLighter}>
            </div>
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

    </div>
  )
}

export default ColorGrid;
