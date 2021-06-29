import { changeAdminNavbarTitle } from "app/redux/commonSlice";
import { fetchListUser } from "app/redux/userSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserTable from "./User.table";
import UserFormModal from "./User.formDialog";

export default function UserManagement() {
  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.user.listUser);

  useEffect(() => {
    dispatch(changeAdminNavbarTitle("Quản lý danh sách người dùng"));
    dispatch(fetchListUser({}));
  }, [dispatch]);

  return (
    <div>
      <UserFormModal />
      <div className="pt-20 px-2">
        <UserTable listUser={listUser} />
      </div>
    </div>
  );
}
