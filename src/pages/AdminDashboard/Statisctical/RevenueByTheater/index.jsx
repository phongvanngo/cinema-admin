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
    // dispatch(fetchListMovie());
    dispatch(fetchListTheaterSystem({}));
    dispatch(fetchRevenueByTheaterSystem({}));
    // (async () => {
    //   try {
    //     let res = await statisticalApi.getRevenueByTheaterSystem();
    //     if (res.status === 200 || res.status === 204) {
    //       setRevenues(res.data.revenues);
    //     } else {
    //       toast.error("Không thể kết nối đến hệ thống");
    //     }
    //   } catch (error) {
    //     console.log("getRevenueByTheaterError", error);
    //     toast.error("Có lỗi xảy ra");
    //   } finally {
    //     dispatch(stopLoading());
    //   }
    // })();
  }, []);
  return (
    <div className="pt-10 px-10">
      <RevenueBarChar />
      <RevenueDoughnutChar />
    </div>
  );
}
