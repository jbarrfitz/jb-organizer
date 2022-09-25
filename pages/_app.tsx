import React from 'react';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import Navbar from '../components/Navbar';
import { AuthContextProvider } from '../context/AuthContext';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Navbar />
        <Content style={{ margin: '50px', backgroundColor: 'white' }}>
          <Layout className="site-layout-background">
            <Content style={{ backgroundColor: 'white' }}>
              <Component {...pageProps} />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2022 Developed by Jerry Barrows-Fitzgerald
        </Footer>
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
