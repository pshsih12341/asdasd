import React, { useRef } from "react";

import style from "./Translation.module.scss"
import Button from "../Button/Button";
import { Match } from "@/modules/match/match.slice";

const Translation:React.FC<{match:Match}> = ({match}) => {
    const text = useRef(null);


    return (
        <div className={style.broadcastDiv}>
            <iframe src={match.broadcast} />
            <div className={style.comments}>

            </div>
            <textarea ref={text} className={style.textArea} placeholder="Большое поле для ввода комментария, в котором есть комментарий"/>
            <Button text="Оставить комментарий"></Button>
        </div>
    )
}

export default Translation;