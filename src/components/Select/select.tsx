import React, { useRef, useState } from 'react';
import cn from 'classnames';

import style from './select.module.scss';
import useClickOutside from '@/hooks/useClickOutside';

interface MySelectProps {
  data:string[],
  onSelect?: (title: string) => void;
}

const MySelect: React.FC<MySelectProps> = ({ data,onSelect }) => {
  const [title, setTitle] = useState(data[0]);
  const [activeTitle,setActiveTitle] = useState(title);
  const [active, setActive] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleCancel = () => {
    setActiveTitle(title);
    setActive(false);
  }

  const handleClickOutside = () => {
    setTitle(activeTitle);
    if (onSelect) {
      onSelect(activeTitle);
    }
    setActive(false)
  }

  const handleAccept = (title:string) => {
    setTitle(title);
    if (onSelect) {
      onSelect(title);
    }
    setActive(false)
  }

  useClickOutside(selectRef, handleClickOutside);

  return (
    <div ref={selectRef}className={cn(style.select, active && style.selectActive)}>
      <div className={style.selectTitle} onClick={() => setActive(true)}>
        {title}
      </div>
      {active && (
        <div className={style.activeTab}>
          <div className={style.activeTabTitle}>{activeTitle}</div>
          <div className={style.activeTabItems}>
            {data.map((el) => (
              <div
                className={style.option}
                key={el}
                onClick={() => setActiveTitle(el)}
              >
                {el}
              </div>
            ))}
          </div>
          <div className={style.buttons}>
            <button className={style.cancelButton} onClick={handleCancel}>Отменить</button>
            <button className={style.acceptButton} onClick={()=> handleAccept(activeTitle)}>Применить</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(MySelect);
