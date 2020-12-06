import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import {
  UserOutlined,
  SolutionOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';

const UserMenu = () => {
  const router = useRouter();
  const onLogout = () => {
    localStorage.setItem('token', null);
    console.log('settoken');
    router.push('/login');
  };
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <SolutionOutlined />
        {' '}
        Profile
      </Menu.Item>
      <Menu.Item key="1">
        <div onClick={onLogout}>
          <LogoutOutlined style={{ marginRight: 8 }} />
          {' '}
          Logout
        </div>
      </Menu.Item>
      {/* <Menu.Divider /> */}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
      <div
        style={{
          fontSize: 14,
          color: '#000000a6',
          padding: '0 18px 0 0',
          marginRight: 2,
          cursor: 'pointer',
        }}
      >
        <Avatar icon={<UserOutlined />} />
        {' '}
        Nhut Kha
      </div>
    </Dropdown>
  );
};

export default UserMenu;
