import React from 'react';
import { Button, message, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { API_HOST } from '../../config/constant/env';
import { postApi } from '../../services/CallApi';
import { fetchData } from '../../redux/fetchingData';

const { confirm } = Modal;
const UnBlockUser = ({ id }) => {
  const dispatch = useDispatch();
  function handlerBlockUser() {
    confirm({
      title: 'Do you Want to block this user?',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure???',
      onOk() {
        dispatch(fetchData());
        postApi(`${API_HOST}users/admin/unblock`, { userId: id })
          .then(() => {
            message.success('success');
          })
          .catch(() => {
            message.error('error!!!');
          });
      },
    });
  }
  return (
    <Button
      onClick={handlerBlockUser}
    >
      Unblock
    </Button>
  );
};

export default UnBlockUser;
