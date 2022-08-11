import {useEffect, useState} from 'react';
import {UploadOutlined} from "@ant-design/icons";
import {Avatar, Button, Form, Input, Upload, message} from "antd";
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {updateUserDetail} from "../../../api/UserDetail";
import {saveUserInfo} from "../../../layout/Navigation/NavigationSlice";


function UserBaseInfo() {
    const userInfo = useSelector(state => state.navigation.userInfo);
    const [fields,setFields] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        setFields([{
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
            }])
    },[userInfo]);

    const onClickSave = () => { message.success("保存成功")};

    const onFinish = (values) => {
       const user = {
            nickname: values.nickname,
            sign: values.sign,
            phone: values.phone
        };
        updateUserDetail(userInfo.id, user).then(res => {
            if(res.data.code === '200'){
                dispatch(saveUserInfo(res.data.data.user));
            }
        }).catch((err) => {
            message.error(err.response.data.msg);
        });
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
                                <Button className="baseInfo-save" htmlType="submit" onClick={onClickSave}>保存</Button>
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