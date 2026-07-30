import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  GroupOutlined,
  HomeOutlined,
  SettingOutlined,
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
    {
      label: "Setting",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        { label: <Link to="/login">Đăng nhập</Link>, key: "login" },
        { label: <Link>Đăng xuất</Link>, key: "logout" },
      ],
    },
  ];
  return (
    <>
      <Menu items={items} mode="horizontal" />
    </>
  );
};

export default Header;
