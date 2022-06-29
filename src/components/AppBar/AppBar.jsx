import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navigation from 'components/Navigation/Navigation';
import 'react-toastify/dist/ReactToastify.css';

function Appbar() {
  return (
    <>
      <header>
        <Navigation />
        <ToastContainer />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Appbar;
