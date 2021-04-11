import axios from 'axios';

export function getAllMedia(params?: any): Promise<any> {
  return axios.get(`https://graph.instagram.com/me/media?${params}`);
}
