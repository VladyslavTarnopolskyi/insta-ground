import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState({
    username: '',
    id: ''
  });
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  const history = useHistory();

  useEffect(() => {
    if (token) {
      axios.get(`https://graph.instagram.com/me?fields=id,username&access_token=${token}`)
        .then(
          (result) => {
            setIsLoaded(true);
            setUser(result.data);
          },
          (error) => {
            setIsLoaded(true);
            localStorage.setItem('token', '');
            localStorage.setItem('userId', '');
            history.push('/')
            console.log(error);
          }
        )
    }
  }, [])

  return (
    <div
      style={{display: 'flex', width: '100%', fontSize: '20px', padding: '20px', justifyContent: 'center'}}>
      {
        isLoaded ?
          <div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{paddingBottom: '25px'}}>
                <div style={{paddingBottom: '5px', color: 'grey'}}>User name</div>
                <div style={{color: 'blue'}}>
                  @{user.username}
                </div>
              </div>
              <div style={{paddingBottom: '25px'}}>
                <div style={{paddingBottom: '5px', color: 'grey'}}>Profile id</div>
                <div>
                  {user.id}
                </div>
              </div>
            </div>
          </div>
          : 'Loading...'
      }
    </div>
  )
}

export default Home;
