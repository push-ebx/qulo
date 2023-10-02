import styles from './styles.module.scss'

const BackgroundImage = ({src, blur}) => {
  return (
    <>
      <div
        style={{background: `url(${src}) no-repeat 50% / cover lightgray`}}
        className={styles.image}
      />
      {blur && <div className={styles.blur}/>}
    </>
  );
};

export {BackgroundImage};