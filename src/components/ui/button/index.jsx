import styles from './styles.module.scss'
import {Link} from "react-router-dom";

const Button = ({children, onClick, to, propClass, active}) => {
  return (
    <Link
      onClick={onClick}
      className={`${styles.button} ${propClass} ${active ? styles.active : ''}`}
      to={to}
    >
      {children}
    </Link>
  );
};

export {Button};