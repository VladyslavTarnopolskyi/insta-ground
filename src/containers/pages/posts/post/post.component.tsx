import React, { useEffect, useState } from 'react';

import { useRouteMatch } from 'react-router';
import { useSelector } from 'react-redux';
import { State } from '../../../../store/reducers/types';
import { Media } from '../../../../rest/photos/types';
import { Link } from 'react-router-dom';

const Post = () => {
  const instaMedia = useSelector((state: State) => state.mediaList.mediaList.data.data);
  const [ isLoaded, setIsLoaded ] = useState<boolean>(true);
  const [ post, setPost ] = useState<Media>({
    id: '',
    media_url: '',
    timestamp: '',
    username: '',
    media_type: '',
    caption: ''
  });

  const param = useRouteMatch();
  // @ts-ignore
  const {id} = param.params || null;

  useEffect(() => {
    if (id) {
      const post = instaMedia.find(post => post.id === id);
      // @ts-ignore
      setPost(post);
      setIsLoaded(false);
    }
  }, []);

  const test = (link: string): boolean => {
    return !link.includes('mp4');
  };
  return (
    <div className='container'>
      {
        !isLoaded ?
          <div style={{textAlign: 'center', paddingTop: '15px'}}>
            {
              test(post.media_url) ?
                <img
                  style={{maxHeight: '80vh'}}
                  src={post.media_url} alt={post.id}/>
                :
                <video controls>
                  <source src={post.media_url} type='video/mp4'/>
                </video>
            }
            <div style={{fontSize: '25px'}}>
              {post.caption}
            </div>
          </div>
          :
          <Link style={{display: 'flex', padding: '15px', justifyContent: 'center'}} to="/">Go to login</Link>
      }

    </div>
  );
};

export default Post;
