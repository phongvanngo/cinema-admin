import { changeAdminNavbarTitle } from "app/redux/commonSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function RevenueByDatetime() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeAdminNavbarTitle("Thống kê doanh thu"));
  }, []);
  return (
    <div>
      <div>Doanh thu theo ngày tháng</div>
    </div>
  );
}
