import { changeAdminNavbarTitle } from "app/redux/commonSlice";
import { startLoading } from "app/redux/loadingSlice";
import { fetchRevenueByDateTime } from "app/redux/statisticalSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import RevenueBarChar from "./RevenueBarChar";

export default function RevenueByTheater() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeAdminNavbarTitle("Thống kê doanh thu"));
    dispatch(startLoading());
    dispatch(fetchRevenueByDateTime({}));
  }, []);
  return (
    <div className="pt-10 px-10">
      <RevenueBarChar />
      {/* <RevenueDoughnutChar /> */}
    </div>
  );
}
