import React, { useEffect } from 'react';
import MySelect from '../../components/Select/select';

import style from './CardsPage.module.scss';
import { useAppDispatch } from '@/services/store';
import { loadCards } from '@/modules/cards/card.thunk';
import { Link } from 'react-router-dom';

const CardsPage: React.FC = () => {
  const dispatch = useAppDispatch();

  //const cards = useAppSelector((state) => state.cards);

  useEffect(() => {
    dispatch(loadCards);
  }, []);

  return (
    <div className={style.page}>
      <div className={style.pageTop}>
        <h3 className={style.title}>Карточки</h3>
        <div className={style.selects}>
          <MySelect
            data={[
              'Все игроки',
              'Действующие участники команды',
              'Бывшие участники команды',
            ]}
          />
          <MySelect
            data={[
              'Все игроки',
              'Вратари',
              'Защитники',
              'Полузащитники',
              'Нападающие',
              'Универсалы',
              'Тренера',
            ]}
          />
        </div>
      </div>
      <div className={style.pageMain}>
        <Link to={'/market'} className={style.addCard}></Link>
      </div>
    </div>
  );
};

export default React.memo(CardsPage);
