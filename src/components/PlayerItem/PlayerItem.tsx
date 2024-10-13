import React from "react";

import styles from "./PlayerItem.module.scss"
import { Player } from "@/modules/players/players.slice";
import { formatDate } from "@/helpers/time";
import { Link } from "react-router-dom";



const PlayerItem:React.FC<{player:Player}> = ({player}) => {

    return (
        <Link to={`/team/${player.id}`}className={styles.playerItem}>
            <img className={styles.playerItemImg} src={player.photo}/>
            <div className={styles.playerItemBot}>
                <div className={styles.playerItemTitle}>{player.fullname}</div>
                <div className={styles.playerItemText}>Игрок №{player.number}</div>
                <div className={styles.playerItemFlex}>
                    <div className={styles.playerItemText}>{formatDate(player.birthday)}</div>
                    <div className={styles.playerItemPosition}>{player.position}</div>
                </div>
            </div>
        </Link>
    )
}

export default React.memo(PlayerItem);