import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";

import "../../assets/css/login.css";
import { fetchUser } from "./loginSlice";
import { useDispatch,useSelector } from "react-redux";
import { checkAuthSelector } from "../../store/selector";
const Login = () => {
  const { Title } = Typography;
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('');
  const [userPassWord,setUserPassWord] = useState('');
  const checkAuth= useSelector(checkAuthSelector);
  console.log('auth',checkAuth);
  console.log(1);
  
  const handleLogin = ()=>{
    dispatch(fetchUser({userName,userPassWord}))
  }
  console.log(2);
  
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  return (
    <div className="login">
      <div className="login-form">
      <Form
    name="basic"
    labelCol={{ span: 4 }}
    initialValues={{ remember: true }}
    autoComplete="off"
  >
          <Title
            style={{ textAlign: "center", padding: "0", margin: "10px 0 30px" }}
          >
            Login
          </Title>
          <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input  value={userName} onChange={(e)=>setUserName(e.target.value)}/>
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password value={userPassWord} onChange={(e)=>setUserPassWord(e.target.value)} />
    </Form.Item>

    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 4, span: 8 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
      <Button type="primary" htmlType="submit" onClick={handleLogin}>
        Submit
      </Button>
    </Form.Item>
  </Form>
      </div>
    </div>
  );
};

export default Login;
