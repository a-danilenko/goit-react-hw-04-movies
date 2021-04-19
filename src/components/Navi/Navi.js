import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './Navi.module.css';

const Navi = () => {
  return (
    <nav className={s.siteNav}>
      <ul className={s.siteNavList}>
        <li className={s.siteNavItem}>
          <NavLink
            exact
            to={routes.home}
            className={s.siteNavLink}
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li className={s.siteNavItem}>
          <NavLink
            to={routes.movies}
            className={s.siteNavLink}
            activeClassName="NavLink--active"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navi;