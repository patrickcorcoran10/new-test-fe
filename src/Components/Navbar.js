import React, { useState } from 'react';
import { Layout, Menu, 
  // Button 
} from 'antd';
import { Nav } from 'react-bootstrap';


import Auth from '../utils/auth'; // Import the Auth variable
import { Link } from 'react-router-dom';
const { Header } = Layout;

const NavBar = () => {
  const [
    // showModal, 
    setShowModal] = useState(false);

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', justifyContent: 'center', }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
          <Link to="/">Home</Link>
            </Menu.Item>
          <Menu.Item key="2">
          <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/calories">Count my Calories</Link>
          </Menu.Item>
          <Menu.Item key="4">
          <Link to="/about-us">About Us</Link>
          </Menu.Item>
        </Menu>
        <div>
          {/* <Button type="primary" style={{ marginRight: '10px' }}>Logout</Button> */}
          {console.log(Auth.loggedIn())};
          {Auth.loggedIn() ? (
            <>

              <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={() => {
              setShowModal(true)
              window.location.pathname = '/login'
            }
          }>Login</Nav.Link>
          )}
        </div>
      </Header>
    </Layout>
  );
};

export default NavBar;
