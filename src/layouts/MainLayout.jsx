import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Navbar />
      </div>
      {/* Packet */}
      <div className="min-h-[calc(100vh-116px)]">
        <Outlet />
      </div>
      {/* footer  */}
      <Footer />
    </div>
  );
};

export default MainLayout;
