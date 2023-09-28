import React from 'react';
import styles from './styles.module.scss'
import {Link} from "react-router-dom";

const Button = ({children, onClick, to, propClass}) => {
  return (
    <Link onClick={onClick} className={`${styles.button} ${propClass}`} to={to}>
      {children}
    </Link>
  );
};

export {Button};