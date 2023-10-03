import styles from './styles.module.scss'
import {HorizontalDivider} from "@/components/ui/horizontal-divider";

const CarouselCard = ({propClassName, src, news_headline, text_news, date_news}) => {
  return (
    <div className={`${styles.card} ${propClassName}`}>

      <div className={styles.image_wrapper}>
        <div className={styles.blackout}></div>
        <img className={styles.news_image} src={src} alt={src} />
      </div>
      <div className={styles.content}>
        <div className={styles.news_headline}>
          <h3 className={styles.news_headline__text}>{news_headline}</h3>
          <span className={styles.news_headline__date}>{date_news}</span>
        </div>
        <HorizontalDivider />
        <div className={styles.text_news}>{text_news}</div>
      </div>
    </div>
  );
};

export {CarouselCard};