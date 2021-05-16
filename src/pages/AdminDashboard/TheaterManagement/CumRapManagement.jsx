import { changeAdminNavbarTitle } from "app/redux/commonSlice";
import { fetchListCumRap } from "app/redux/cumRapSlice";
import { fetchListTheaterSystem } from "app/redux/theaterSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CumRapTable from "./CumRap.table";
import CumRapFormModal from "./CumRap.formDialog";

export default function CumRapManagement() {
  const dispatch = useDispatch();
  const listCumRap = useSelector((state) => state.cumRap.listCumRap);

  useEffect(() => {
    dispatch(changeAdminNavbarTitle("Quản lý cụm rạp"));
    dispatch(fetchListCumRap({}));
    dispatch(fetchListTheaterSystem({}));
  }, [dispatch]);

  return (
    <div>
      <CumRapFormModal />
      <div className="pt-20">
        <CumRapTable listCumRap={listCumRap} />
      </div>
    </div>
  );
}
