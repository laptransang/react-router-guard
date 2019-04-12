import React from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

function SideBar() {
  return (
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
    >
      <Menu.Item key="1">
        <Icon type="home" />
        Home
      </Menu.Item>
      <SubMenu
        key="sub2"
        title={(
          <span>
            <Icon type="setting" />
            <span>Services</span>
          </span>
        )}
      >
        <Menu.Item key="2.1">New service 1</Menu.Item>
        <Menu.Item key="2.2">New service 2</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default SideBar;
