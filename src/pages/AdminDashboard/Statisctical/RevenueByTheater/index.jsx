import statisticalApi from "app/api/statisticalApi";
import { changeAdminNavbarTitle } from "app/redux/commonSlice";
import { startLoading, stopLoading } from "app/redux/loadingSlice";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RevenueBarChar from "./RevenueBarChar";
import RevenueDoughnutChar from "./RevenueDoughnutChar";
import { toast } from "react-toastify";
import { fetchListMovie } from "app/redux/movieSlice";
import { fetchListTheaterSystem } from "app/redux/theaterSlice";
import { fetchRevenueByTheaterSystem } from "app/redux/statisticalSlice";

export default function RevenueByTheater() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeAdminNavbarTitle("Thống kê doanh thu"));
    dispatch(startLoading());
    dispatch(fetchListTheaterSystem({}));
    dispatch(fetchRevenueByTheaterSystem({}));

  }, []);
  return (
    <div className="pt-10 px-10">
      <RevenueBarChar />
      <RevenueDoughnutChar />
    </div>
  );
}
