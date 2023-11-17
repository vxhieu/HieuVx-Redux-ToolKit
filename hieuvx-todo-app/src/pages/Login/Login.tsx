import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import "../../assets/css/login.css";
import { fetchUser } from "./loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthSelector, checkStatusSelector } from "../../store/selector";
import Loading from "../../components/Skeleton";
import Toast from "../../components/Toast";
const Login = () => {
  const { Title } = Typography;
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userPassWord, setUserPassWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    dispatch(fetchUser({ userName, userPassWord }));
    setUserName("");
    setUserPassWord("");
  };
  const checkAuth = useSelector(checkAuthSelector);
  const checkStatus = useSelector(checkStatusSelector);
  useEffect(() => {
    if (checkAuth.authenticated) {
      navigate("/dashboard");
    }
  }, [checkAuth.authenticated]);
  useEffect(() => {
    if (checkStatus === "loading") {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [checkStatus]);
  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  return (
    <div className="login">
      {isLoading && <Loading />}
      <div className="login-form">
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          initialValues={{ remember: true }}
        >
          <Title
            style={{ textAlign: "center", padding: "0", margin: "10px 0 30px" }}
          >
            Login
          </Title>
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              value={userPassWord}
              onChange={(e) => setUserPassWord(e.target.value)}
            />
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
