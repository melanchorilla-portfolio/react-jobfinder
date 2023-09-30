import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

const AuthRoute = ({children}: Props) => {
  if (Cookies.get("token") !== undefined) {
    return children
  } else if (Cookies.get("token") === undefined) {
    return <Navigate to={"/login"} />;

  }
};

export default AuthRoute;
