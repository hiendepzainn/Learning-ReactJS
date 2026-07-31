import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";
import { getAccountAPI } from "./services/api.service";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Goat";
import { Spin } from "antd";

const App = () => {
  const { setUser } = useContext(AuthContext);
  const [isAppLoading, setIsAppLoading] = useState(true);

  const getUserInfo = async () => {
    const res = await getAccountAPI();
    if (res.data) {
      setUser(res.data.user);
    }
    setIsAppLoading(false);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      {isAppLoading ? (
        <Spin size="large" fullscreen />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
