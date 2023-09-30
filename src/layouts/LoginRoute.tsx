import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

const LoginRoute = ({children}: Props) => {
    if (Cookies.get("token") !== undefined) {
        return <Navigate to={"/dashboard"} />;
      } else if (Cookies.get("token") === undefined) {
        return children
      }
}

export default LoginRoute