import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import axios from 'axios';
const url = process.env.NODE_ENV === 'production' ? 'https://in-ground.herokuapp.com' : 'https://localhost:5000';

const Auth = () => {
  const [ error, setError ] = useState<boolean>(false);
  const query = new URLSearchParams(useLocation().search);

  const history = useHistory();
  const code = query.get('code');

  useEffect(() => {
    if (code) {
      const bodyData = new FormData();
      bodyData.append('client_id', '2867772396804397');
      bodyData.append('client_secret', '328c7ada672a57480fd4c8dee2af54d1');
      bodyData.append('grant_type', 'authorization_code');
      bodyData.append('redirect_uri', `${url}/auth`);
      bodyData.append('code', `${code}`);

      axios.post('/oauth/access_token', bodyData)
        .then(response => {
          localStorage.setItem('token', response.data.access_token);
          localStorage.setItem('userId', response.data.user_id);
          history.push('/');
          window.location.reload();
        })
        .catch(error => {
          console.log(error);
          setError(true);
          localStorage.setItem('token', '');
          localStorage.setItem('userId', '');
        });
    }
  }, []);

  return (
    <div style={{textAlign: 'center', margin: '15px'}}>
      {
        error ? 'Something went wrong' : 'You are logged in'
      }
    </div>
  );
};

export default Auth;
