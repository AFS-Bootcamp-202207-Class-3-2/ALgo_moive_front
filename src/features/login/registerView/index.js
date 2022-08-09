import { LockOutlined, UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import "./index.css"

function RegisterView() {
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
                    name="username"
                    className="form-item"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        prefix={<UserOutlined
                        className="site-form-item-icon" />}
                        placeholder="user name" />
                </Form.Item>
                <Form.Item
                    name="password"
                    className="form-item"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        placeholder="your password"
                    />
                </Form.Item>
                <Form.Item
                    name="confirm-password"
                    className='form-item'
                    rules={[{ required: true, message: 'Please confirm your password!' }]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
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
                            Register
                        </Button>
                    )}
                </Form.Item>
            </Form>
        </div>
    )
}

export default RegisterView;
