import React, {Component, Fragment} from 'react';
import './index.scss'
//ANTD
import {Form, Input, Button, Row, Col} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

class Registerorm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  toggleForm = () => {
    //调父级方法
    this.props.switchForm('login')
  }

  render() {
    return (
      <Fragment>
        <div className="form-header">
          <h4 className="column">注册</h4>
          <span onClick={this.toggleForm}>登录</span>
        </div>
        <div className="form-content">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{remember : true}}
            onFinish={() => this.onFinish}
          >
            <Form.Item name="username" rules={[{required : true, message : 'Please input your Username!'}]}>
              <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
            </Form.Item>
            <Form.Item name="password" rules={[{required : true, message : 'Please input your password!'}]}>
              <Input prefix={<LockOutlined className="site-form-item-icon"/>} placeholder="password"/>
            </Form.Item>
            <Form.Item name="passwords" rules={[{required : true, message : 'Please input your password!'}]}>
              <Input prefix={<LockOutlined className="site-form-item-icon"/>} placeholder="password"/>
            </Form.Item>
            <Form.Item name="code" rules={[{required : true, message : 'Please input your password!'}]}>
              <Row gutter={13}>
                <Col span={15}>
                  <Input placeholder='Code'/>
                </Col>
                <Col span={9}>
                  <Button type='danger' block>获取验证码</Button>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" block>注册</Button>
            </Form.Item>
          </Form>
        </div>
      </Fragment>
    )
  }
}

export default Registerorm;
