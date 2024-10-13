import React from 'react';
import style from './loginPopup.module.scss';

type LoginPopupProps = {
  onClose: () => void;
};

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {

    const onClicHandler = () => {
        location.assign('https://misis-x-bgitu-kokos-auth-288422-55f831-89-169-142-232.traefik.me/authservice/login')
    }

  return (
    <div className={style.overlay} onClick={onClose}>
      <div className={style.popup} onClick={(e) => e.stopPropagation()}>
        <h2 className={style.popupTitle}>Войти через ВКонтакте</h2>
        <button className={style.vkLoginBtn} onClick={onClicHandler}>Войти</button>
      </div>
    </div>
  );
};

export default LoginPopup;
