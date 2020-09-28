import React from 'react';
import { Form, Row, Col, Input, Button } from 'antd';

const Auth = () => {
  return (
    <Row>
      <Col>
        <Form>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: '메일주소를 입력해주세요.' }]}>
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: '패스워드를 입력해주세요.' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Auth;
