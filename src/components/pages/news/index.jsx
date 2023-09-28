import React from 'react';
import styles from './styles.module.scss'
import {Button} from "@/components/ui/button";
import {ApplicationButton} from "@/components/ui/application-button";
import {BackgroundImage} from "@/components/ui/background-image";

const News = () => {
  return (
    <>
      <BackgroundImage src={import('./images/background.png')} blur/>

      <div className={styles.news}>
        <ApplicationButton>Заявка на участие</ApplicationButton>
        <Button onClick={() => console.log(123)} to={'/about'}>Новости</Button>
      </div>
    </>
  );
};

export default News;