import React from 'react';
import { Layout } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className="footer">
      <div className="footer-content">
      <div>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FacebookOutlined style={{ fontSize: '24px', marginRight: '10px' }} /></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><TwitterOutlined style={{ fontSize: '24px', marginRight: '10px' }} /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><InstagramOutlined style={{ fontSize: '24px' }} /></a>
        </div>
        <div className="footer-bottom">
          Feez Ka Dojo  &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
