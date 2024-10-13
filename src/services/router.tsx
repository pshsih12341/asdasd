import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Layout from '../layouts';
import GamePage from '../pages/gamesPage/gamePage';
import CardsPage from '@/pages/CardsPage/CardsPage';
import MarketPage from '@/pages/MarketPage/MarketPage';
import MatchPage from '@/pages/MatchPage/MatchPage';
import ContactsPage from '@/pages/ContactsPage/ContactsPage';
import InfoPage from '@/pages/InfoPage/InfoPage';
import TeamPage from '@/pages/TeamPage/TeamPage';
import NotFoundPage from '../pages/NotFoudPage/NotFoundPage';
import PlayerPage from '../pages/PlayerPage/PlayerPage';
import RedirectHandler from '@/pages/RedirectHanlderPage/RedirectHanlderPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    handle: () => ({
      crumb: {
        text: 'Главная',
      },
    }),
    children: [ 
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/plays',
        handle: () => ({
          crumb: {
            text: 'Матчи',
          },
        }),
        children: [
          {
            index: true,
            element: <GamePage />,
          },
          {
            path: '/plays/:matchId',
            element: <MatchPage />,
            handle: () => ({
              crumb: {
                text: 'Матч 123',
              },
            }),
          },
        ],
      },
      {
        path: '/cards',
        element: <CardsPage />,
        handle: () => ({
          crumb: {
            text: 'Карточки',
          },
        }),
      },
      {
        path: '/market',
        element: <MarketPage />,
        handle: () => ({
          crumb: {
            text: 'Магазин',
          },
        }),
      },
      {
        path: '/contacts',
        element: <ContactsPage />,
        handle: () => ({
          crumb: {
            text: 'Контакты',
          },
        }),
      },
      {
        path: '/info',
        element: <InfoPage />,
        handle: () => ({
          crumb: {
            text: 'О клубе',
          },
        }),
      },
      {
        path: '/team',
        handle: () => ({
          crumb: {
            text: 'Команда',
          },
        }),
        children: [
          {
            index: true,
            element: <TeamPage />,
          },
          {
            path: '/team/:playerId',
            element: <PlayerPage />,
            handle: () => ({
              crumb: {
                text: 'Чел чел',
              },
            }),
          },
        ],
      },
      {
        path: '/auth/callback',
        element: <RedirectHandler />,
      },
      {
        path: '/*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
