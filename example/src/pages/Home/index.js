import React from 'react';
import { Card, Breadcrumb, Layout } from 'antd';

import AntDesignPro from './img/ant-design-pro.jpg';

const { Content } = Layout;

function Home() {
  return (
    <Card>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>

      <Content style={{ margin: '15px 0' }}>
        <img src={AntDesignPro} alt="" style={{ width: '100%' }} />
      </Content>
    </Card>
  );
}

export default Home;
