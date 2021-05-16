import { changeAdminNavbarTitle } from "app/redux/commonSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function TheaterManagement() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeAdminNavbarTitle("Quản lý cụm rạp"));
  }, [dispatch]);
  return <div>theater</div>;
}
