import statisticalApi from "app/api/statisticalApi";
import { changeAdminNavbarTitle } from "app/redux/commonSlice";
import { startLoading, stopLoading } from "app/redux/loadingSlice";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import RevenueBarChar from "./RevenueBarChar";
import RevenueDoughnutChar from "./RevenueDoughnutChar";
import { toast } from "react-toastify";

export default function RevenueByTheater() {
  const dispatch = useDispatch();

  const [revenues, setRevenues] = useState([]);

  useEffect(() => {
    dispatch(changeAdminNavbarTitle("Thống kê doanh thu"));
    dispatch(startLoading());
    (async () => {
      try {
        let res = await statisticalApi.getRevenueByTheaterSystem();
        if (res.status === 200 || res.status === 204) {
          setRevenues(res.data.revenues);
        } else {
          toast.error("Không thể kết nối đến hệ thống");
        }
      } catch (error) {
        console.log("getRevenueByTheaterError", error);
        toast.error("Có lỗi xảy ra");
      } finally {
        dispatch(stopLoading());
      }
    })();
  }, []);
  return (
    <div className="p-2">
      <RevenueBarChar data={{ revenues }} />
      <RevenueDoughnutChar data={{ revenues }} />
    </div>
  );
}
