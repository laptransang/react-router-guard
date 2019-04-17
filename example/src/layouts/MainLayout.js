import React from 'react';
import { Layout } from 'antd';
import { SideBar } from '../components';

const { Header, Content, Sider } = Layout;

function MainLayout(props) {
  const { children, location } = props;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
      >
        <SideBar pathname={location.pathname} />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: '0 25px' }}>
          <h2>Main Layout</h2>
        </Header>
        <Content style={{ margin: '15px' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
