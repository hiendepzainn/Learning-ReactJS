import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  AliwangwangOutlined,
  GroupOutlined,
  HomeOutlined,
  LoginOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useContext } from "react";
import { AuthContext } from "../../Goat";

const Header = () => {
  const { user } = useContext(AuthContext);

  console.log("check user:", user);

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
            label: "Welcome acxyz",
            key: "welcome",
            icon: <AliwangwangOutlined />,
            children: [{ label: <Link>Logout</Link>, key: "logout" }],
          },
        ]),
  ];
  return (
    <>
      <Menu items={items} mode="horizontal" />
    </>
  );
};

export default Header;
