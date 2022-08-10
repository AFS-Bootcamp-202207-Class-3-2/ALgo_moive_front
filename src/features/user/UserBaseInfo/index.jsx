import React, {useState} from 'react';
import {UploadOutlined, UserOutlined} from "@ant-design/icons";
import {Avatar, Button, Form, Input, Upload, message} from "antd";
import './index.css'
import {useSelector} from "react-redux";


function UserBaseInfo() {
    const userInfo = useSelector(state => state.navigation.userInfo);
    const [fields, setFields] = useState([
        {
            name: ['nickname'],
            value: userInfo.nickname ? userInfo.nickname : '',
        },
        {
            name: ['phone'],
            value: userInfo.phone ? userInfo.phone : '',
        },
        {
            name: ['sign'],
            value: userInfo.sign ? userInfo.sign : '',
        }
    ]);

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    return (
        <div className="baseInfo">
            <div className="baseInfo-title">基本信息</div>
            <div className="baseInfo-center">
                <div className="baseInfo-left">
                    <Avatar shape="square" src={userInfo.avatar} className="baseInfo-avatar" size={400}/>
                    <Upload>
                        <Button icon={<UploadOutlined />} className="baseInfo-avatar-button">更新头像</Button>
                    </Upload>
                    <span className="baseInfo-avatar-limit">支持JPG,JPEG,PNG格式且文件需小于1M</span>
                </div>
                <div className="baseInfo-right">
                    <Form
                        size="large"
                        labelAlign="right"
                        className="baseInfo-form"
                        layout="horizontal"
                        labelCol={{span: 3, offset: 0}}
                        onFinish={onFinish}
                        fields={fields}
                        >
                        <Form.Item label="昵称" name="nickname">
                            <Input placeholder="nickname"/>
                        </Form.Item>
                        <Form.Item label="手机号" name="phone">
                            <Input placeholder="phone"/>
                        </Form.Item>
                        <Form.Item label="个性签名" name="sign">
                            <Input placeholder="sign"/>
                        </Form.Item>
                        <Form.Item>
                            <div className="baseInfo-button-group">
                                <Button className="baseInfo-save" htmlType="submit">保存</Button>
                                <Button className="baseInfo-reset" htmlType="reset">重置</Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default UserBaseInfo;