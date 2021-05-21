import { adminLoginAgain, adminLoginRequest } from "app/redux/adminAuthSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import AdminSignInUI from "./AdminSignInUI";

export default function AdminSignIn() {
  const isLoggedIn = useSelector((state) => state.adminAuth.isLoggedIn);
  const dispatch = useDispatch();
  let location = useLocation();
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);

  //kiểm tra đã đăng nhập gần đây chưa, nếu rồi thì ko cần đăng nhập lại
  const idToken = localStorage.getItem("id_token");

  if (idToken !== null) dispatch(adminLoginAgain());

  React.useEffect(() => {
    if (isLoggedIn) {
      setRedirectToReferrer(true);
    }
  }, [isLoggedIn]);

  const handleLogin = (loginInfo) => {
    dispatch(adminLoginRequest(loginInfo));
  };

  let { from } = location.state || {
    from: { pathname: "/" },
  };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }
  return (
    <div>
      <AdminSignInUI handleLogin={handleLogin} />
    </div>
  );
}
