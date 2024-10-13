import {useAppDispatch, useAppSelector } from "@/services/store";
import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import style from "./MatchPage.module.scss"
import Tabs from "@/components/Tabs/Tabs";
import classNames from "classnames";
import Translation from "@/components/Translation/Translation";
import ComandsTab from "@/components/ComandsTab/ComandsTab";
import { formatDate, formatTime } from "@/helpers/time";
import Skeleton from "@/components/Skeleton/Skeleton";
import { loadMatchById } from "@/modules/match/match.thunks";

const MatchPage:React.FC = () => {
    const {matchId} = useParams();
    const [activeTab, setActiveTab] = useState('Видео матча');
    const dispatch = useAppDispatch();

    const match = useAppSelector((s) => s.match?.data);

    console.log(match);

    const tabsLive = [
        { id: 1, label: 'Трансляция матча' },
        { id: 2, label: 'Текстовая трансляция' },
        { id: 3, label: 'Составы команд' },
        { id: 4, label: 'Ставка на исход' },
    ];

    const tabsOfline = [
        { id: 1, label: 'Видео матча' },
        { id: 2, label: 'Текстовая трансляция' },
        { id: 3, label: 'Составы команд' },
        { id: 4, label: 'Статистика' },
        { id: 5, label: 'Голосование' },
        { id: 6, label: 'Фото' },
    ];

    useEffect(() => {
        dispatch(loadMatchById(Number(matchId)));
    },[matchId,dispatch])

    if (!match){
        return <div className={style.page}>
            <Skeleton height="900px"/>
        </div>
    }

    return (
        <div className={style.page}>
            <h3 className={style.title}>Матч</h3>
            <div className={style.matchTop}>
                <div className={style.teams}>
                    <div className={classNames(style.homeTeam,style.team)}>
                        <img className={style.logoImg} src={match.game_id?.club_home_id?.team_photo}/>
                        <div className={style.linkDiv}>
                            <div className={style.titleText}>{match.game_id.club_home_id.team_name}</div>
                            <div className={style.normalText}>{formatDate(match.game_id.date)}</div>
                        </div>
                    </div>
                    <div className={style.linkDiv}>
                        <div className={style.titleText}>против</div>
                        <div className={style.normalText}>{formatTime(match.game_id.time)}</div>
                    </div>
                    <div className={classNames(style.noHomeTeam,style.team)}>
                    <div className={style.linkDiv}>
                        <div className={style.titleText}>{match.game_id.club_away_id.team_name}</div>
                        <div className={style.normalText}>{match.game_id.stadium_id.stadium_name}</div>
                    </div>
                    <img className={style.logoImg} src={match.game_id.club_away_id.team_photo}/>
                    </div>
                </div>
            </div>
            <Tabs  tabs={match.game_id.status === "live" ? tabsLive : tabsOfline}
              activeTab={activeTab}
              setActiveTab={setActiveTab}/>
            {(activeTab === "Трансляция матча" || activeTab === "Видео матча") && <Translation match={match}/>}
            {(activeTab === "Составы команд") && <ComandsTab match={match}/>}
        </div>
    )
}

export default MatchPage;