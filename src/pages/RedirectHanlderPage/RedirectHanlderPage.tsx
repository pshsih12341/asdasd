import React, { useEffect } from 'react';
import { setUser } from '@/modules/user/user.slice'; // Импортируйте ваш action для установки пользователя
import { getAccesToken } from '@/modules/user/user.thunk';
import { useAppDispatch } from '@/services/store';

const RedirectHandler: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const type = urlParams.get('type');
    const device_id = urlParams.get('device_id');
    const code_verifier = urlParams.get('code_verifier');

    if (code && state && type && device_id && code_verifier) {
      const userData = {
        auth: true,
        access_token: '',
        refresh_token: '',
        id_token: '',
        expires_in: null,
        user_id: null,
        state,
        scope: '',
        device_id,
        code,
        type,
      };
      dispatch(setUser(userData));
      dispatch(getAccesToken({
        client_id: "52468011",
        grant_type: 'authorization_code',
        code_verifier,
        device_id,
        code,
        redirect_uri: 'https://football.itatmisis.ru/'
      }));
    }
  }, [dispatch]);

  return <div>Redirecting...</div>;
};

export default RedirectHandler;
