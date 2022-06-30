import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navigation from 'components/Navigation/Navigation';
import Loader from 'components/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import s from './AppBar.module.css';

function Appbar() {
  return (
    <>
      <header className={s.header}>
        <Navigation />
        <ToastContainer />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Appbar;
