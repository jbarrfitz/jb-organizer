import React from 'react';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import Navbar from '../components/Navbar';
import { AuthContextProvider } from '../context/AuthContext';

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Sider, Footer } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);


function MyApp({ Component, pageProps }) {
  return (
      <AuthContextProvider>
        <Layout style={{ minHeight: '100vh' }}>
          <Navbar />
          <Content style={{ margin: '50px', backgroundColor: 'white' }}>
            <Layout className="site-layout-background">
              {/* <Sider className="site-layout-background" width={200}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%' }}
                  items={items2}
                />
              </Sider> */}
              <Content style={{ backgroundColor: 'white' }}>
                <Component {...pageProps} />
              </Content>
            </Layout>
          </Content>
        <Footer style={{ textAlign: 'center' }}>©2022 Developed by Jerry Barrows-Fitzgerald</Footer>
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
