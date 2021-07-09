import { changeAdminNavbarTitle } from "app/redux/commonSlice";
import { fetchListUser } from "app/redux/userSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserBoard from "./UserBoard";
import UserDetailModal from "./UserDetail.dialog";
export default function UserManagement() {
  const dispatch = useDispatch();
  const listUsers = useSelector((state) => state.user.listUser);

  useEffect(() => {
    dispatch(changeAdminNavbarTitle("Thống kê người dùng"));
    dispatch(fetchListUser({}));
  }, [dispatch]);

  return (
    <div>
      <div className="p-5">
        <UserDetailModal />
        <UserBoard listUsers={listUsers} />
      </div>
    </div>
  );
}
