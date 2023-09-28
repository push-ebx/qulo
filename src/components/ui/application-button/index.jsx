import React from 'react';
import styles from './styles.module.scss'

const ApplicationButton = ({onClick, propClass, children}) => {
  return (
    <a onClick={onClick} className={`${styles.button} ${propClass}`}>
      {children}
    </a>
  );
};

export {ApplicationButton};