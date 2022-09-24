import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { withRouter } from 'next/router';
const { Header, Content, Sider } = Layout;

export default function NavbarComp() {
  const { user } = useAuth();
  // const router = withRouter();

  const navItems: MenuProps['items'] = [
    { key: 'home', label: 'Trivia'},
    user?.email ? { key: 'login', label: 'Login'} : { key: 'logout', label: 'Logout'},
  ]

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" items={navItems} />
    </Header>
  );
}
