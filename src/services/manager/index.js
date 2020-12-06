import axios from 'axios';
import { API_HOST, API_END_POINT } from '../../config/constant/env';

export const getAllUser = () => {
  const token = localStorage.getItem('token');
  return axios.get(`${API_HOST}${API_END_POINT.GET_ALL_USER}`,
    {
      headers: {
        access_token: token,
      },
    });
};
