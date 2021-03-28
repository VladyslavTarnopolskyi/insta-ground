import React, { useEffect, useState } from 'react';

import { Post } from '../types';
import { useRouteMatch } from 'react-router';
import axios from 'axios';

const Post = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [post, setPost] = useState<Post>({
    id: '',
    media_url: '',
    timestamp: '',
    username: '',
    media_type: '',
    caption: ''
  });

  const token = localStorage.getItem('token');
  const param = useRouteMatch();
  // @ts-ignore
  const { id } = param.params || null;

  useEffect(() => {
    if (token) {
      axios.get(`https://graph.instagram.com/${id}?fields=id,media_type,media_url,caption,username,timestamp&access_token=${token}`)
        .then(
          (result) => {
            setIsLoaded(true);
            console.log(result);
            setPost({...result.data});
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }, []);

  const test = (link: string): boolean => {
    return !link.includes('mp4');
  };
  return (
    <div className='container'>
      {
        isLoaded ?
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
          'loading'
      }

    </div>
  );
};

export default Post;
