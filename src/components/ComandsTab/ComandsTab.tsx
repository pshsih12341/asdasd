import React from "react";

import styles from "./ComandsTab.module.scss"
import { Match } from "@/modules/match/match.slice";

const ComandsTab:React.FC<{match:Match}> = ({match}) => {

    const combinedLineup = match.lineup_home.map((homePlayer, index) => ({
        fullname_home: homePlayer.full_name,
        position_home: homePlayer.position,
        fullname_away: match.lineup_away[index].full_name,
        position_away: match.lineup_away[index].position,
      }));

    return (<div className={styles.comandsTab}>
        <div className={styles.teamsTitles}>
            <div className={styles.team}>
                <img className={styles.teamImg} src={match.game_id.club_home_id.team_photo}/>
                <div className={styles.teamTitle}>{match.game_id.club_home_id.team_name}</div>
            </div>
            <div className={styles.team}>
                <div className={styles.teamTitle}>{match.game_id.club_away_id.team_name}</div>
                <img className={styles.teamImg} src={match.game_id.club_away_id.team_photo}/>
            </div>
        </div>
        {combinedLineup.map((el) => (
        <div className={styles.lineup} key={el.fullname_home}>
            <div className={styles.homeLine}>
                    <div className={styles.text}>{el.fullname_home}</div>
                    <div className={styles.text}>{el.position_home}</div>
            </div>
            <div className={styles.homeLine}>
                    <div className={styles.text}>{el.position_away}</div>
                    <div className={styles.text}>{el.fullname_away}</div>
            </div>
        </div>
        )   
        )}
    </div>)
}

export default React.memo(ComandsTab);