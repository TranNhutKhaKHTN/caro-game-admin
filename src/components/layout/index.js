import React, { useState } from 'react';

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './styles.module.scss';
import UserMenu from '../userMenu';

const { Header, Sider, Content } = Layout;

const PageLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const path = router.asPath;
  // constant [selectedKey, setSelectedKey] = useState(path);
  // console.log(path);
  //
  // useEffect(() => {
  //   setSelectedKey(path);
  // });

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider width={250} trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo} />
        <Menu theme="dark" mode="inline" selectedKeys={[`${path}`]}>
          <Menu.Item key="/admin/user" icon={<UserOutlined />}>
            <Link href="/admin/user">USER</Link>
          </Menu.Item>
          <Menu.Item key="/admin/nav2" icon={<VideoCameraOutlined />}>
            Manager
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            History
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className={styles.siteLayout}>
        <Header className={styles.siteLayoutBackgroundUser} style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: styles.trigger,
            onClick: toggle,
          })}
          <UserMenu />
        </Header>
        <Content
          className={styles.siteLayoutBackground}
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '82vh',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default PageLayout;
