import React, { useEffect, useState } from 'react';
import { Link, NavLink} from 'react-router-dom';

import { Props } from './header.types';

import styles from './header.scss';

const Header: React.FC<Props> = ({navLinks}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, []);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to="/">InstaGround</Link>
      </h1>
      {
        isLoggedIn ?
          <nav className={styles.nav}>
            {
              navLinks.map(nav =>
                <NavLink
                  className={styles.navItem}
                  activeClassName={styles.active}
                  key={nav.title}
                  to={nav.link}>
                  {nav.title}
                </NavLink>
              )
            }
          </nav>
          : null
      }
    </header>
  );
};

export default Header;
