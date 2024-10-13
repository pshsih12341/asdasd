import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Breadcrumbs from '../components/Breadcrumbs/BreadCrumbs';
import { Outlet } from 'react-router-dom';


const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
