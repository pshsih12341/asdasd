import { useAppDispatch, useAppSelector } from '../../services/store';

import style from './HomePage.module.scss';
import FeedItem from '../../components/FeedItem/feedItem';
import { Pagination } from '@gravity-ui/uikit';
import MatchItem from '../../components/MatchItem/matchItem';
import { useEffect } from 'react';
import { loadMatches } from '@/modules/matches/matches.thunks';
import Skeleton from '@/components/Skeleton/Skeleton';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const feedData = useAppSelector((store) => store.feed.data);
  const lastMatch = useAppSelector((store) => store?.matches?.data?.games[0]);

  useEffect(() => {
    dispatch(loadMatches());
  },[dispatch])

  return (
    //<div>{feedData && <Text>{feedData}</Text>}</div>
    <div className={style.page}>
      <div className={style.block}>
        <div className={style.matches}>
          <h3 className={style.title}>Ближайший матч</h3>
          {lastMatch ?  <MatchItem match={lastMatch} /> : <Skeleton height="54px"/>}
        </div>
        <div className={style.feed}>
          <h3 className={style.title}>Новости</h3>
          <div className={style.feedContainer}>
            {feedData.feeds.map((el) => (
              <FeedItem key={el.title} feed={el} />
            ))}
          </div>
        </div>
        <Pagination
          page={feedData.page}
          pageSize={8}
          onUpdate={() => {
            console.log(123);
          }}
          className={style.Pagination}
        />
      </div>
    </div>
  );
};

export default HomePage;
