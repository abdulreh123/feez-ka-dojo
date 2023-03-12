import React from 'react';
import { Layout } from 'antd';
import Header from '../theme/Header';
import Footer from '../theme/Footer';
import './Layout.css';

const AppLayout = ({children}) => {
  return (
    <Layout>
      <Header />
      <div className='container'>
       {children}
      </div>
      <Footer />
    </Layout>
  );
};

export default AppLayout;