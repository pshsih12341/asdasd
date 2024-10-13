import React from "react";
import styles from "./MarketPopup.module.scss";
import Gallery from "../Gallery/Gallery";
import CarouselImg from "@/assets/svg/galeryPhoto.png"

interface MarketPopupProps {
    onClose: () => void;
}

const MarketPopup: React.FC<MarketPopupProps> = ({ onClose }) => {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                <Gallery images={[CarouselImg,CarouselImg,CarouselImg]} mini={true}/>
                <div className={styles.popupRight}>
                    <div className={styles.popupText}>
                        <div className={styles.title}>Средний белый подарочный набор</div>
                        <div className={styles.popupArticle}>Артикул товара: 123</div>
                        <div className={styles.normalText}>Набор из белых блокнота, ручки, значка и кружки в подарочной упаковке. Идеально подойдет для презента фанату ФК "Кокос групп"!</div>
                    </div>
                    <div className={styles.popupPrices}>
                        <div className={styles.priceKokos}>300</div>
                        <div className={styles.price}>150₽</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(MarketPopup);
