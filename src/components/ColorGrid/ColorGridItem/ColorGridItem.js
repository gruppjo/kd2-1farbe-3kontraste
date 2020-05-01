// REACT, STYLE, STORIES & COMPONENT
import React from 'react';
import styles from './ColorGridItem.module.scss';

// ASSETS

// STORE

// OTHER COMPONENTS

// CONFIG & DATA
const colorSequence = [
  'Lighter',
  'Light',
  '',
  'Dark'
];

const divCount = 4;

// COMPONENT: ColorGridItem
const ColorGridItem = (props) => {
  // PROPS
  const {
    color = 'gray', // red, yellow, green, blue, gray, redYellow
    direction = 'in', // in, out
    solid = false,
    actives = [], // [0, ..., 3] indices are mapped to nested divs
  } = props;
  let { activeClass = 'active' } = props;
  if (activeClass !== 'active') {
    activeClass = color + activeClass;
  }

  let divSettings = [...Array(divCount).keys()].map((index) => {
    const colorSequenceIndex = direction === 'in' ? index : divCount - 1 - index;
    return {
      colorClass: solid ? color : color + colorSequence[colorSequenceIndex],
      activeClass: actives.includes(index) ? activeClass : '',
    };
  });
  // STATE HOOKS

  // STORE

  // EFFECT HOOKS

  // OTHER HOOKS

  // HELPERS, HANDLES, METHODSHOOKS

  // RENDER: ColorGridItem
  return (
    <div className={`${styles.colorGridItem} ${styles[divSettings[0].colorClass]} ${styles[divSettings[0].activeClass] || ''}`}>
      <div className={`${styles[divSettings[1].colorClass]} ${styles[divSettings[1].activeClass] || ''}`}>
        <div className={`${styles[divSettings[2].colorClass]} ${styles[divSettings[2].activeClass] || ''}`}>
          <div className={`${styles[divSettings[3].colorClass]} ${styles[divSettings[3].activeClass] || ''}`}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorGridItem;
