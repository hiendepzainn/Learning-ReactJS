import { Button, Result } from "antd";
import { useContext } from "react";
import { AuthContext } from "./Goat";
import { Link } from "react-router-dom";

const PrivateRoute = (props) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return (
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button type="primary">
            <Link to="/login">Login</Link>
          </Button>
        }
      />
    );
  }
  return <>{props.children}</>;
};
export default PrivateRoute;
