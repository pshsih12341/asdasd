import React from "react";

import style from "./footer.module.scss"

const Footer:React.FC = () => {
    return (
        <footer className={style.footer}>
            <div className={style.text}>
                <p>© 2004 — 2024 ООО «Кокос групп»</p>
                <a href="tel:+79123456789">+7(912) 345-67-89</a>
                <a href="mailto:contactus@kokos.footbal.ru">contactus@kokos.footbal.ru</a>
            </div>
            <img src="/src/widgets/layout/svg/tele.svg"/>
        </footer>
    )
}

export default React.memo(Footer);