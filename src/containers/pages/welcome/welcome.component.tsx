import React, { useEffect, useState } from 'react';

import styles from './welcome.scss';
import { useHistory } from 'react-router-dom';

const Welcome = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);
  const token = localStorage.getItem('token');
  const history = useHistory();

  const instagram = 'https://api.instagram.com/oauth/authorize/';
  const clientId = '2867772396804397';
  const redirectUri = 'https://in-ground.herokuapp.com/auth';
  const scope = 'user_profile,user_media';
  const responseType = 'code';

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, []);

  const logOut = () => {
    localStorage.setItem('token', '');
    localStorage.setItem('userId', '');
    history.push('/');
    setIsLoggedIn(false);
    window.location.reload();

  };

  const authUri = `${instagram}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;

  return (
    <div className="container">
      <section className={styles.welcome}>
        {
          isLoggedIn ?
            <div>
              <span>
                You are Logged In
              </span>
              <button className={styles.loginBtn} onClick={logOut}>Log Out</button>
            </div>
            :
            <div>
              <span>Welcome to our site</span>
              <a
                href={authUri}
                className={styles.loginBtn}>
                Log In with Instagram
              </a>
            </div>
        }

      </section>
    </div>
  );
};

export default Welcome;
