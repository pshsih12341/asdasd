import React, { useState } from 'react';
import style from './header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { TextInput } from '@gravity-ui/uikit';
import cart from "@/assets/svg/shopping-cart.svg";
import logo from '@/assets/svg/logo.svg';
import kokosik from "@/assets/svg/kokosik.svg"
import classNames from 'classnames';
import { useAppSelector } from '@/services/store';
import LoginPopup from '@/components/LoginPopup/LoginPopup';

const Header: React.FC = () => {
  const location = useLocation();
  const user = useAppSelector((s) => s.user.data);
  
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleLoginClick = () => {
    setPopupOpen(true); 
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <header className={style.hedaer}>
      <div className={style.headerTop}>
        <Link to={'/'} className={style.logo}>
          <img alt="logo" src={logo} />
          <p>{`Футбольный Клуб\n“Кококс Групп”`}</p>
        </Link>
        <div className={style.headerTopRight}>
          <Link to={'/cart'} className={style.headerCart}>
            <img alt="cart" src={cart} />
            <p className={style.headerCartp}>Корзина</p>
          </Link>
          {!user?.auth ? (
            <button className={style.loginBtn} onClick={handleLoginClick}>
              Войти
            </button>
          ) : (
            <>
              <div className={style.headerCart}>
                <img src={kokosik} />
                <p className={style.headerCartp}>1273</p>
              </div>
              <Link to={'/profile'}>
                <img alt="profile" className={style.headerImg} />
              </Link>
            </>
          )}
        </div>
      </div>
      <div className={style.headerBot}>
        <nav className={style.headerNav}>
          <Link
            to={'/team'}
            className={classNames(
              style.headerNavLink,
              location.pathname.includes('team') && style.active
            )}
          >
            Команда
          </Link>
          <span className={style.borderSpan} />
          <Link
            to={'/plays'}
            className={classNames(
              style.headerNavLink,
              location.pathname.includes('plays') && style.active
            )}
          >
            Матчи
          </Link>
          <span className={style.borderSpan} />
          <Link
            to={'/info'}
            className={classNames(
              style.headerNavLink,
              location.pathname.includes('info') && style.active
            )}
          >
            О клубе
          </Link>
          <span className={style.borderSpan} />
          <Link
            to={'/market'}
            className={classNames(
              style.headerNavLink,
              location.pathname.includes('market') && style.active
            )}
          >
            Магазин
          </Link>
          <span className={style.borderSpan} />
          <Link
            to={'/cards'}
            className={classNames(
              style.headerNavLink,
              location.pathname.includes('cards') && style.active
            )}
          >
            Карточки
          </Link>
          <span className={style.borderSpan} />
          <Link
            to={'/contacts'}
            className={classNames(
              style.headerNavLink,
              location.pathname.includes('conntacts') && style.active
            )}
          >
            Контакты
          </Link>
        </nav>
        <TextInput size="l" className={style.input} />
      </div>
      {isPopupOpen && <LoginPopup onClose={handleClosePopup} />}
    </header>
  );
};

export default React.memo(Header);
