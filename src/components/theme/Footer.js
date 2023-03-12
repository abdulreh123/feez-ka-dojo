import React from 'react';
import { Layout } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="#">
            <FacebookOutlined />
          </a>
          <a href="#">
            <TwitterOutlined />
          </a>
          <a href="#">
            <InstagramOutlined />
          </a>
        </div>
        <div className="footer-bottom">
          Feez Ka Dojo  &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
