import Footer from '@/components/share/Footer';
import Navbar from '@/components/share/Navbar';
import ScrollToTop from '@/components/share/ScrollToTop';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
