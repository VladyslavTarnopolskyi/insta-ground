import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import styles from './posts.scss';
import { Post } from './types';
import axios from 'axios';

const Posts: React.FC = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setItems] = useState<Post[]>([]);
  const token = localStorage.getItem('token');
  const history = useHistory();

  useEffect(() => {
   if (token) {
     axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,username,timestamp&access_token=${token}`)
       .then(
         (result) => {
           setIsLoaded(true);
           console.log(result.data);
           setItems(result.data.data);
         },
         (error) => {
           setIsLoaded(true);
           setError(error);
           localStorage.setItem('token', '');
           localStorage.setItem('userId', '');
           history.push('/')
           console.log(error);
         }
       )
   }
  }, [])

  const test = (link: string): boolean => {
    return !link.includes('mp4');
  }

  return (
    <div className="container">
      <ul className={styles.posts}>
        {
          isLoaded ?
          posts.map(post =>
            <li key={post.id}>
              <Link
                to={`posts/${post.id}`}>
                {
                  test(post.media_url)
                    ?
                    <img
                      style={{width: '100%', height: 'auto', minHeight: '200px'}}
                      src={post.media_url} alt={post.id}/>
                      :
                    <video controls style={{maxWidth: '100%'}}>
                      <source src={post.media_url} type="video/mp4" />
                    </video>
                }
                  <div className={styles.text}>
                    {post.caption || 'None'}
                  </div>
              </Link>
            </li>
          ) : 'Loading...'
        }
      </ul>
    </div>
  );
};

export default Posts;
