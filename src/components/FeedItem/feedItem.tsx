import React from "react";
import { Feed } from "../../modules/feed/feed.slice";

import styles from './FeedItem.module.scss';
import { formatDateToMoscowNumeric } from "../../helpers/time";


const FeedItem:React.FC<{feed:Feed}> = ({feed}) => {
    return (
        <div className={styles.feedItem}>
            <img src={feed.img} alt="feednews" className={styles.feedItemImg}/>
            <div className={styles.feedItemBot}>
                <div className={styles.feedItemP}>{feed.title}</div>
                <div className={styles.feedItemDiv}>
                    <div className={styles.feedItemDate}>{formatDateToMoscowNumeric(feed.date)}</div>
                    <div className={styles.feedItemTag}>{feed.tag}</div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(FeedItem);