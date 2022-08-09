import {
    LockOutlined,
    UserOutlined,
    EyeTwoTone,
    EyeInvisibleOutlined,
  } from "@ant-design/icons";
  import { Button, Form, Input, message } from "antd";
  import { useEffect, useState } from "react";
  import { useDispatch } from "react-redux";
  import { register } from "../../../api/login";
  import { changePageState } from "../loginSlice";
  import "./index.css";

function RegisterView() {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});
    const dispatch = useDispatch();

    // To disable submit button at the beginning.
    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values) => {
        if (values.password !== values.confirmPassword) {
          message.warn("密码和确认密码不一致");
        }
        register(values.username, values.password).then(res => {
            if(res.data.code === '201'){
                message.success('注册成功');
                dispatch(changePageState());
            }
        }).catch(err => {
            message.error(err);
        });
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
                    name="confirmPassword"
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
