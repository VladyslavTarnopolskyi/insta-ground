import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { Store } from '../../../reducers/types';
import { fetchMediaList } from '../../../actions/photos';

import styles from './posts.scss';

const Posts: React.FC = () => {
  const instaMedia = useSelector((state: Store) => state.mediaList.mediaList.data);
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  let params = `fields=id,caption,media_url,media_type,username,timestamp&access_token=${token}`;

  useEffect(() => {
    if (token && !instaMedia.data.length) {
      dispatch(fetchMediaList(params));
    }
  }, [fetchMediaList]);

  const test = (link: string = ''): boolean => {
    return !link.includes('mp4');
  };

  const togglePage = (page: string) => {
    const par = new URL(page);
    params = par.search.slice(1);
    dispatch(fetchMediaList(params));
  };

  const prevMedia = () => {
    togglePage(instaMedia.paging.previous);
  };

  const nextMedia = () => {
    togglePage(instaMedia.paging.next);
  };

  return (
    <div className={styles.container}>
      <div>
        <button
          className={styles.navArrow}
          disabled={!instaMedia.paging.previous}
          onClick={prevMedia}
        >&laquo; Prev</button>
      </div>
      <ul className={styles.posts}>
        {
          instaMedia.data.length ? instaMedia.data.map(post =>
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
          ) : <Link
            style={{display: 'flex', padding: '15px', justifyContent: 'center'}}
            to="/">Login</Link>
        }
      </ul>
      <div>
        <button
          className={styles.navArrow}
          disabled={!instaMedia.paging.next}
          onClick={nextMedia}>
          &raquo; Next
        </button>
      </div>
    </div>
  );
};

export default Posts;
