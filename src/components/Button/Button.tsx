import React from "react";

import styles from "./Button.module.scss"

const Button:React.FC<{text:string}> = ({text}) => (
    <button className={styles.acceptBtn}>{text}</button>
)

export default React.memo(Button);