import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
import { GroupOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";

const Header = () => {
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
  ];
  return (
    <>
      <Menu items={items} mode="horizontal" />
    </>
  );
};

export default Header;
