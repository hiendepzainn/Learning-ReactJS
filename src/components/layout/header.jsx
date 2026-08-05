import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, message } from "antd";
import {
  AliwangwangOutlined,
  GroupOutlined,
  HomeOutlined,
  LoginOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Goat";

const Header = () => {
  const [key, setKey] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  console.log("check user:", user);

  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate(`${location.pathname}`);
    message.success("Logout success!");
  };

  const items = [
    {
      key: "home",
      label: <Link to="/">Home</Link>,
      icon: <HomeOutlined />,
    },
    {
      key: "users",
      label: <Link to="/users">Users</Link>,
      icon: <UserOutlined />,
    },
    {
      key: "books",
      label: <Link to="/books">Books</Link>,
      icon: <GroupOutlined />,
    },
    ...(user == null
      ? [
          {
            key: "login",
            label: <Link to="/login">Login</Link>,
            icon: <LoginOutlined />,
          },
        ]
      : [
          {
            label: `Welcome ${user.fullName}`,
            key: "welcome",
            icon: <AliwangwangOutlined />,
            children: [
              {
                label: <div onClick={handleLogout}>Logout</div>,
                key: "logout",
              },
            ],
          },
        ]),
  ];

  useEffect(() => {
    console.log(location.pathname);
    switch (location.pathname) {
      case "/books":
        setKey("books");
        break;
      case "/users":
        setKey("users");
        break;
      case "/":
        setKey("home");
        break;
    }
  }, [location]);
  return (
    <>
      <Menu items={items} mode="horizontal" selectedKeys={[key]} />
    </>
  );
};

export default Header;
