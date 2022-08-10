import React from 'react';
import {UploadOutlined, UserOutlined} from "@ant-design/icons";
import {Avatar, Button, Form, Input, Upload, message} from "antd";
import './index.css'


function BaseInfo() {
    const props: UploadProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    return (
        <div className="baseInfo">
            <div className="baseInfo-title">基本信息</div>
            <div className="baseInfo-center">
                <div className="baseInfo-left">
                    <Avatar shape="square" src="https://pic3.zhimg.com/80/v2-9f5d9acb0bbad9ab7310b921f75d497e_720w.jpg" className="baseInfo-avatar" size={400}/>
                    <Upload {...props}>
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
                        >
                        <Form.Item label="用户名" name="nickname">
                            <Input placeholder="nickname"/>
                        </Form.Item>
                        <Form.Item label="手机号" name="phone">
                            <Input placeholder="phone" />
                        </Form.Item>
                        <Form.Item label="个性签名" name="sign">
                            <Input placeholder="sign" />
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

export default BaseInfo;