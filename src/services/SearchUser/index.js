import axios from 'axios';
import { API_END_POINT, API_HOST } from '../../config/constant/env';

const SearchUser = (keyWord) => {
  const user = localStorage.getItem('user');
  const token = user.access_token;
  const url = `${API_HOST}${API_END_POINT.SEARCH_USER}/${keyWord}`;
  return axios.get(url, {
    headers: {
      access_token: token,
    },
  });
};
export default SearchUser;
