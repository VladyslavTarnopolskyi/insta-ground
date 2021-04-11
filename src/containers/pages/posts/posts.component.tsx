import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { State } from '../../../store/reducers/types';
import { fetchMediaList } from '../../../store/actions/photos';

import styles from './posts.scss';

const Posts: React.FC = () => {
  const instaMedia = useSelector((state: State) => state.mediaList.mediaList.data.data);
  const [ isLoaded, setIsLoaded ] = useState(true);
  const token = localStorage.getItem('token');
  const history = useHistory();
  const dispatch = useDispatch();

  const params = `fields=id,caption,media_url,media_type,username,timestamp&access_token=${token}`;

  useEffect(() => {
    if (token) {
      dispatch(fetchMediaList(params));
    }
    if (!instaMedia.length) {
      setIsLoaded(false);
      localStorage.setItem('token', '');
      localStorage.setItem('userId', '');
      history.push('/');
    }
  }, []);

  const test = (link: string): boolean => {
    return !link.includes('mp4');
  };

  return (
    <div className='container'>
      <ul className={styles.posts}>
        {
          isLoaded ? instaMedia.map(post =>
            <li key={post.id}>
              <Link
                to={`posts/${post.id}`}>
                {
                  test(post.media_url)
                    ?
                    <img
                      style={{width: '100%', height: '100%', minHeight: '250px', objectFit: 'cover'}}
                      src={post.media_url} alt={post.id}/>
                    :
                    <video controls style={{maxWidth: '100%'}}>
                      <source src={post.media_url} type='video/mp4'/>
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
