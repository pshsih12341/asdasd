import React from 'react';
import styles from './ContactsPage.module.scss';
import YandexMap from '@/components/YMap/Ymap'; // Импорт компонента Яндекс.Карты
import ContactForm from '@/components/ContactForm/ContactForm';

const ContactsPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.title}>Контакты</div>
      <div className={styles.subTitle}>Как связаться</div>
      <div className={styles.main}>
        <div className={styles.mainLeft}>
          <div className={styles.text}>
            <div className={styles.miniTitle}>Звоните</div>
            <div className={styles.texText}>+7 (495) 30 80 110</div>
          </div>
          <div className={styles.text}>
            <div className={styles.miniTitle}>Пишите</div>
            <div className={styles.texText}>hello@kokocgroup.ru</div>
          </div>
          <div className={styles.text}>
            <div className={styles.miniTitle}>Приходите в гости</div>
            <div className={styles.texText}>
              г. Москва, 127051, Цветной Бульвар, 30 стр.1
            </div>
          </div>
          <div className={styles.text}>
            <div className={styles.miniTitle}>Следите за нами в Telegram</div>
            <a className={styles.texText}>https://t.me/fckokocgroup</a>
          </div>
        </div>
        <div className={styles.mainRight}>
          <YandexMap />
        </div>
      </div>
      <div className={styles.title}>Форма обратной связи</div>
      <ContactForm />
    </div>
  );
};

export default React.memo(ContactsPage);
