import React from "react";

import styles from "./InfoPage.module.scss"
import infoLogo from "@/assets/svg/Infologo.png";
import CarouselImg from "@/assets/svg/galeryPhoto.png"
import Gallery from "@/components/Gallery/Gallery";

const InfoPage:React.FC = () => {

    return (<>
    <img src={infoLogo} className={styles.mainImg}/>
    <div className={styles.page}>
        <div className={styles.title}>О клубе</div>
        <div className={styles.subTitle}>История и развитие клуба</div>
        <div className={styles.text}>Кокос Групп – группа компаний в сфере интернет-маркетинга. Включает в себя более 35 компаний. Кокос Групп была основана в 2004 году. Среди крупных клиентов Кокос Групп есть такие компании как Яндекс, Авито, ВКонтакте, ПИК, X5 Retail Group и другие. В группе компаний работает более 1200 сотрудников.

История футбольного клуба «Кокос Групп» началась с командой, состоящей из сотрудников группы компаний и поддерживающих их коллег. Параллельно с этим существовала команда «Вершина», играющая в ЛФЛ, в которой тогда играл Александр Шокуров – нынешний управляющий партнер «Кокос Групп». И еще одним истоком был Чемпионат Новой Риги, а точнее Загородный турнир, в котором играли многие известные Московские футболисты. На этом турнире Максим познакомился с профессиональными футболистами Павлом Погребняком и Михаилом Пименовым.

Спустя время игроки команды «Вершина» вышли на пенсию, а Максим не хотел прекращать играть и предложил Михаилу тренировать команду Кокоса. Так в 2020 году появился ФК «Кокос Групп» и одноименная команда, которая так же начала играть в ЛФЛ и с каждым годом добивалась все больших успехов.

ФК «Кокос Групп» развивается постепенно, но плодотворно. Один из важнейших приоритетов – коллектив. Каждый участник клуба ценен и важен для нас, все были подобраны с особой тщательностью и трепетом.</div>
      <Gallery images={[CarouselImg,CarouselImg,CarouselImg]}/>
      <div className={styles.subTitle}>Болельщики</div>
      <div className={styles.text}>
        На игры команды «Кокос Групп» приезжает большое количество болельщиков. С собой они всегда привозят баннеры, плакаты, шарфы, барабаны, иногда даже пиротехнику и всегда активно поддерживают команду. В основном наши болельщики это: сотрудники «Кокос Групп», которые активно болеют за коллег и с чьей помощью был основан футбольный клуб, друзья и родственники, которые рады поддержать любимых, и независимые фанаты, число которых постепенно растет. Игроки рады получать такую поддержку от болельщиков: она помогает им двигаться вперед и поддерживает дух. Без поддержки фанатов ФК «Кокос Групп» не добился бы таких высот!
      </div>
      <Gallery images={[CarouselImg,CarouselImg,CarouselImg]} />
    </div>
    </>)
}

export default React.memo(InfoPage);