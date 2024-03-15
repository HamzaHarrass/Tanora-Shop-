import { Outlet } from "react-router-dom";
import Logo from '../image/logo'
const Auth = () => {
  return (
    <div className="auth-container">
      <Logo></Logo>
      <Outlet />
    </div>
  );
};

export default Auth;