import React, { useRef } from 'react';

import style from './MarketPage.module.scss';
import useHorizontalScroll from '@/hooks/useHorizontalScroll';
import MarketListItem from '@/components/MarketListItem/MarketListItem';

const MarketPage: React.FC = () => {
  const listContainerRef = useRef<HTMLDivElement>(null);
  useHorizontalScroll(listContainerRef);

  return (
    <div className={style.page}>
      <h3 className={style.title}>Магазин</h3>
      <div className={style.main}>
        <MarketListItem />
        <MarketListItem />
      </div>
    </div>
  );
};

export default React.memo(MarketPage);
