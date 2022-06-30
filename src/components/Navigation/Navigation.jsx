import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={navData => (navData.isActive ? s.activeLink : s.navLink)}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={navData => (navData.isActive ? s.activeLink : s.navLink)}
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
