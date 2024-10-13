import React, { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/store';

import style from './gamePage.module.scss';
import MySelect from '../../components/Select/select';
import { Match } from '../../modules/matches/matches.slice';
import { capitalizeFirstLetter } from '../../helpers/string';
import MatchItem from '../../components/MatchItem/matchItem';
import footballImg from "@/assets/svg/football.png";
import { loadMatches } from '@/modules/matches/matches.thunks';
import Skeleton from '@/components/Skeleton/Skeleton';
import { tournamentAliasing } from '@/helpers/aliasing';

interface GroupedMatches {
  [key: string]: Match[];
}

const GamePage: React.FC = () => {
  const dispatch = useAppDispatch()
  const [selectedTournament, setSelectedTournament] = useState('Все матчи');
  const [season,setSeason] = useState('2024/2025')

  const tournaments = useAppSelector((s) => s.tournaments.data.tournaments);
  const dataTournaments = useMemo(() => {
    return tournaments.map((tournament) => tournament.tournament_name);
  }, [tournaments]);

  const matches = useAppSelector((state) => state.matches.data);

  useEffect(() => {
    dispatch(loadMatches({ season, selectedTournament: tournamentAliasing(selectedTournament,tournaments) }));
  },[dispatch,season,selectedTournament,tournaments]);


  if (!matches) {
    return (
      <div className={style.page}>
        <div className={style.pageContainer}>
        <Skeleton height='900px'/>
        </div>
      </div>
    )
  }


  const groupedMatches: GroupedMatches = matches.games.reduce((acc, match) => {
      const matchDate = new Date(Date.parse(match.date));
      let month = matchDate.toLocaleString('default', {
        month: 'long',
        year: 'numeric',
      });

      month = capitalizeFirstLetter(month);

      if (!acc[month]) {
        acc[month] = [];
      }

      acc[month].push(match);

      return acc;
    }, {} as GroupedMatches);



  return (
    <div className={style.page}>
      <img
        alt="football"
        src={footballImg}
        className={style.img}
      />
      <div className={style.pageContainer}>
        <div className={style.pageTop}>
          <h3 className={style.title}>Календарь сезона</h3>
          <MySelect data={['2024/2025', '2023/2024', '2022/2023']} onSelect={setSeason}/>
          <MySelect data={["Все матчи",...dataTournaments]} onSelect={setSelectedTournament}/>
        </div>
        <div className={style.category}>{selectedTournament}</div>
        <div className={style.contentContainer}>
          {Object.entries(groupedMatches).map(([month, games]) => (
            <div key={month} className={style.monthContainer}>
              <h4 className={style.month}>{month}</h4>
              <div className={style.matchesContainer}>
                {games.map((game) => (
                  <MatchItem key={game.id} match={game} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default React.memo(GamePage);
