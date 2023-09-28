import styles from './styles.module.scss'

const Loader = () => {
  return (
    <div className={`${styles.loader} ${styles.centered}`} >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export {Loader};