import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import "./index.css"

function RegisterView(props) {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});

    // To disable submit button at the beginning.
    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values) => {
        console.log('Finish:', values);
    };

    return (
        <div className="register-view">
            <h1 className="register-title">REGISTER</h1>

            <Form
                size='large'
                className='register-form'
                form={form}
                name="register-form"
                layout="horizontal"
                onFinish={onFinish}>
                <Form.Item
                    className='form-item'
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        prefix={<UserOutlined
                        className="site-form-item-icon" />}
                        placeholder="user name" />
                </Form.Item>
                <Form.Item
                    className='form-item'
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="your password"
                    />
                </Form.Item>
                <Form.Item
                    className='form-item'
                    name="confirm-password"
                    rules={[{ required: true, message: 'Please confirm your password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="confirm password"
                    />
                </Form.Item>
                <Form.Item shouldUpdate>
                    {() => (
                        <Button
                            className='green-button'
                            htmlType="submit"
                            disabled={
                                !form.isFieldsTouched(true) ||
                                !!form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                        >
                            注册
                        </Button>
                    )}
                </Form.Item>
            </Form>
            <Button
                size="large"
                type="primary"
                onClick={props.updateLoginState}>
                切换到登录
            </Button>
        </div>
    )
}

export default RegisterView;
