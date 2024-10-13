import React, { useRef, useState } from "react";
import style from "./MarketListItem.module.scss";
import useHorizontalScroll from "@/hooks/useHorizontalScroll";
import MarketPopup from "../MarketPopup/MarketPopup";

const MarketListItem: React.FC = () => {
    const listContainerRef = useRef<HTMLDivElement>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    useHorizontalScroll(listContainerRef);

    const handleItemClick = () => {
        setIsPopupOpen(true); // Открываем попап
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false); //
    };

    return (
        <div className={style.listItem}>
            <p className={style.listTitle}>Коллекционные карточки</p>
            <div className={style.listContainer} ref={listContainerRef}>
                <div className={style.item} onClick={handleItemClick}>
                    <img
                        className={style.itemImg}
                        src="https://gorodrabot.ru/images/news/101492.jpg?v=1590010411"
                    />
                    <div className={style.itemBot}>
                        <p className={style.itemText}>Рандомная карточка</p>
                        <div className={style.prices}>
                            <p className={style.itemPointsPrice}>300 баллов</p>
                            <p className={style.itemPrice}>2000Р</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Отображаем попап, если состояние isPopupOpen истинно */}
            {isPopupOpen && <MarketPopup onClose={handleClosePopup} />}
        </div>
    );
};

export default MarketListItem;
