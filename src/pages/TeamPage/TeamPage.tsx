import React from 'react';

import styles from './TeamPage.module.scss';
import { Pagination } from '@gravity-ui/uikit';
import Select from '@/components/Select/select';
import teamPhoto from '@/assets/svg/TeamPhoto.png';
import { useAppSelector } from '@/services/store';
import PlayerItem from '@/components/PlayerItem/PlayerItem';

const TeamPage: React.FC = () => {
  const players = useAppSelector((s) => s.players.data);

  const dataSelectOne = [
    'Все игроки',
    'Действующие участники команды',
    'Бывшие участники команды',
  ];
  const dataSelectTwo = [
    'Все игроки',
    'Вратари',
    'Защитники',
    'Полузащитники',
    'Нападающие',
    'Универсалы',
    'Тренера',
  ];

  return (
    <>
      <img className={styles.mainImg} src={teamPhoto} />
      <div className={styles.page}>
        <div className={styles.mainTop}>
          <div className={styles.title}>Команда</div>
          <div className={styles.selects}>
            <Select data={dataSelectOne} />
            <Select data={dataSelectTwo} />
          </div>
        </div>
        <div className={styles.main}>
          {players?.players.map((el) => (
            <PlayerItem player={el} key={el.id} />
          ))}
        </div>
        <Pagination
          page={players.page}
          pageSize={players.per_page}
          onUpdate={() => {}}
          className={styles.pagination}
        />
      </div>
    </>
  );
};

export default React.memo(TeamPage);
