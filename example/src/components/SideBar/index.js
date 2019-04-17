import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-guard';

const { SubMenu } = Menu;

function SideBar(props) {
  const { pathname } = props;

  return (
    <Menu
      defaultSelectedKeys={[pathname]}
      defaultOpenKeys={['/services/1']}
      mode="inline"
      theme="dark"
    >
      <Menu.Item key="/">
        <Icon type="home" />
        <Link to="/" style={{ display: 'inline-block' }}>
          Home
        </Link>
      </Menu.Item>

      <SubMenu
        key="/services"
        title={(
          <span>
            <Icon type="setting" />
            <span>Services</span>
          </span>
        )}
      >
        <Menu.Item key="/services/1">
          <Link to="/services/1">New service 1</Link>
        </Menu.Item>
        <Menu.Item key="/services/2">
          <Link to="/services/2">New service 2</Link>
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key="/users"
        title={(
          <span>
            <Icon type="user" />
            <span>Users</span>
          </span>
        )}
      >
        <Menu.Item key="/user/setting">
          <Link to="/user/setting">Setting</Link>
        </Menu.Item>
        <Menu.Item key="/user/profile">
          <Link to="/user/profile">Profile</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default SideBar;
