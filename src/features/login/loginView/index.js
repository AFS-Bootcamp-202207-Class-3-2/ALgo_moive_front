import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api/login";
import {useDispatch} from "react-redux";
import {saveUserInfo} from "../../../layout/Navigation/NavigationSlice";
import "./index.css";

function LoginView() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [, forceUpdate] = useState({});
  const navigator = useNavigate();

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    login(values.username, values.password)
      .then((res) => {
        if (res.data.code === "201") {
          dispatch(saveUserInfo(res.data.data.user));
          navigator("/");
        }
      })
      .catch((err) => {
        message.error(err);
      });
  };

  return (
    <div className="login-view">
      <h1 className="login-title">LOGIN</h1>

      <Form
        size="large"
        className="login-form"
        form={form}
        name="login-form"
        layout="horizontal"
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          className="form-item"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="user name"
          />
        </Form.Item>
        <Form.Item
          name="password"
          className="form-item"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="your password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              className="green-button"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Log in
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginView;
