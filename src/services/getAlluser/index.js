import { API_HOST } from '../../config/constant/env';
import { getApi } from '../CallApi';

export const getAllUser = () => {
  const url = `${API_HOST}users/all`;
  getApi(url).then((res) => {
    console.log(res);
    return res;
  })
    .catch((err) => err);
};
