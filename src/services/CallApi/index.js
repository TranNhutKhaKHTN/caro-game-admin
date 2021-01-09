import axios from 'axios';

export const getApi = (url, data) => {
  const token = localStorage.getItem('token');
  return axios.get(url,
    {
      headers: {
        access_token: token,
      },
      params: {
        ...data,
      },
    });
};

export const postApi = (url, data) => {
  const token = localStorage.getItem('token');
  return axios.post(url, {
    ...data,
  },
  {
    headers: {
      access_token: token,
    },
  });
};
