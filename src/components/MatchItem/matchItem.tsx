import React from 'react';

import style from './MatchItem.module.scss';
import { Match } from '../../modules/matches/matches.slice';
import { Link } from 'react-router-dom';
import { formatDate, formatTime } from '@/helpers/time';

const MatchItem: React.FC<{ match: Match }> = ({ match }) => {
  return (
    <Link to={`/plays/${match.id}`} className={style.lastMatch}>
      <div className={style.team}>
      <img src={match.club_home_id.team_photo} />
      <p>{match.club_home_id.team_name}</p>
      </div>
      <div className={style.normalText}>против</div>
      <div className={style.team}>
        <img src={match.club_away_id.team_photo} />
        <p>{match.club_away_id.team_name}</p>
      </div>
      <div className={style.normalText}>
        {formatDate(match.date)}
      </div>
      <div className={style.normalText}>{formatTime(match.time)}</div>
      <div className={style.normalText}>{match.stadium_id.stadium_name}</div>
    </Link>
  );
};

export default React.memo(MatchItem);
