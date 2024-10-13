import {
  Breadcrumbs as BC,
  FirstDisplayedItemsCount,
  LastDisplayedItemsCount,
} from '@gravity-ui/uikit';
import {
  UIMatch,
  useMatches,
  useNavigate,
} from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

interface HandleParams {
  data: unknown;
}

type Handle = ({ data }: HandleParams) => {
  crumb: {
    text: string;
  };
};

const Breadcrumbs = () => {
  const navigate = useNavigate();
  const matches = useMatches() as UIMatch<unknown, Handle>[];

  const crumbs = matches
    .map((match) => {
      const crumb = match.handle?.({ data: match.data }).crumb;
      if (!crumb) {
        return undefined;
      }

      return {
        text: crumb.text,
        action: () => navigate(match.pathname),
      };
    })
    .filter((item) => !!item);

  return (
    <BC
      className={styles.breadcrumbs}
      items={crumbs}
      firstDisplayedItemsCount={FirstDisplayedItemsCount.One}
      lastDisplayedItemsCount={LastDisplayedItemsCount.One}
      renderItemDivider={() => '>'}
    />
  );
};
export default Breadcrumbs;
