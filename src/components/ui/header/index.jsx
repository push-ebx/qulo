import styles from './styles.module.scss'
import {Button} from "@/components/ui/button";
import ChameleonLogo from '@/assets/images/ChameleonStudioLogo.svg'
import QULOLogo from '@/assets/images/QULOLogo.svg'
import {ApplicationButton} from "@/components/ui/application-button";
import { useLocation } from 'react-router-dom';

const Header = () => {
  const routes = [
    {
      title: 'Новости',
      to:'/news'
    },
    {
      title: 'Канон',
      to:'/canon'
    },
    {
      title: 'Об игре',
      to:'/about'
    },
    {
      title: 'Галерея',
      to:'/gallery'
    },
    {
      title: 'Блог',
      to: '/blog'
    }
  ];
  const location = useLocation()

  return (
    <header className={styles.header}>
      <div className={styles.logos}>
        <img src={ChameleonLogo} alt="ChameleonLogo"/>
        <div className={styles.divider}></div>
        <img src={QULOLogo} alt="QuloLogo"/>
      </div>

      <nav className={styles.navbar}>
        {
          routes.map((route, i) =>
            <Button
              active={route.to === location.pathname}
              key={i}
              to={route.to}
            >
              {route.title}
            </Button>
          )
        }
      </nav>

      <ApplicationButton propClass={styles.applicationButton}>Заявка на участие</ApplicationButton>
    </header>
  );
};

export {Header};