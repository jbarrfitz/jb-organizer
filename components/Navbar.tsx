import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { useRouter } from "next/router";

const { Header, Content, Sider } = Layout;

export default function NavbarComp() {
  const { user } = useAuth();
  const router = useRouter();

  console.warn('User:', user)

  const navItems: MenuProps['items'] = [
    { key: 'dashboard', label: 'Dashboard'},
    user?.email ? { key: 'login', label: 'Login'} : { key: 'logout', label: 'Logout'},
    { key: 'about', label: 'About'},
  ]
  .map(item => ({
    ...item,
    onClick: () => router.push(`/${item.key}`)
  }))

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" items={navItems} />
    </Header>
  );
}
