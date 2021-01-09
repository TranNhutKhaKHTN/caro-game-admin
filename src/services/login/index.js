import axios from 'axios';
import { API_HOST, API_END_POINT } from '../../config/constant/env';

export const apiLogin = (data) => {
  const url = `${API_HOST}${API_END_POINT.USER_LOGIN}`;
  return axios.post(url, {
    ...data,
  });
};
