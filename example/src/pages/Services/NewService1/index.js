import React from 'react';
import { Card, Breadcrumb, Layout } from 'antd';

const { Content } = Layout;

function NewService1(props) {
  console.log('NewService1', props);
  return (
    <Card>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/services">Services</Breadcrumb.Item>
        <Breadcrumb.Item>New service 1</Breadcrumb.Item>
      </Breadcrumb>

      <Content style={{ margin: '15px 0' }}>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </p>
      </Content>
    </Card>
  );
}

export default NewService1;
