import React from 'react';
import { Layout,Menu } from 'antd';
import logo from '../../assests/Logo.png';
import { Link } from 'react-router-dom';
const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader className="header">
      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="Jiu-Jitsu Shop" />
        </div>
      </div>
      <Menu className="header-menu" mode="horizontal" breakpoint="xl">
        <Menu.Item key="about">
          <Link to="/">About</Link>
        </Menu.Item>
        <Menu.Item key="reviews">
          <Link to="/reviews">Reviews</Link>
        </Menu.Item>
        <Menu.Item key="seminar">
          <Link to="/seminar">Seminars</Link>
        </Menu.Item>
        <Menu.Item key="products">
          <Link to="/products">Products</Link>
        </Menu.Item>
      </Menu>
      <div className="cart">
        {/* <ShoppingCartOutlined /> */}
      </div>
      <div className="cart">
        {/* <ShoppingCartOutlined /> */}
      </div>
      <div className="cart">
        {/* <ShoppingCartOutlined /> */}
      </div>
      <div className="cart">
        {/* <ShoppingCartOutlined /> */}
      </div>
    </AntHeader>
  );
};

export default Header;