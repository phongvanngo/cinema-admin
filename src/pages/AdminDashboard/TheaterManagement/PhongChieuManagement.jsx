import { changeAdminNavbarTitle } from "app/redux/commonSlice";
import { fetchListPhongChieu } from "app/redux/phongChieuSlice";
import { fetchListTheaterSystem } from "app/redux/theaterSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhongChieuTable from "./PhongChieu.table";
import PhongChieuFormModal from "./PhongChieu.formDialog";
import { setEmtyListCumRap } from "app/redux/cumRapSlice";

export default function PhongChieuManagement() {
  const dispatch = useDispatch();
  const listPhongChieu = useSelector(
    (state) => state.phongChieu.listPhongChieu
  );

  useEffect(() => {
    dispatch(changeAdminNavbarTitle("Quản lý phòng chiếu"));
    // dispatch(fetchListPhongChieu({}));
    dispatch(fetchListTheaterSystem({}));
    dispatch(setEmtyListCumRap());
  }, [dispatch]);

  return (
    <div>
      <PhongChieuFormModal />
      <div className="pt-20">
        <PhongChieuTable listPhongChieu={listPhongChieu} />
      </div>
    </div>
  );
}
