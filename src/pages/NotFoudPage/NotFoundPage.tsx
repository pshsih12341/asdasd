import { Button, Text } from '@gravity-ui/uikit';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Text variant="display-4">404</Text>
      <Text variant='header-1'>Кажется, вы заблудились</Text>
      <Button onClick={() => navigate('/')} view="action" size="xl">
        Вернуться на главную
      </Button>
    </div>
  );
};
export default NotFoundPage;
