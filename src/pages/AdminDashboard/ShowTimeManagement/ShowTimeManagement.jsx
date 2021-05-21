import { fetchListTheaterSystem } from "app/redux/theaterSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ShowTimeFilter from "./ShowTime.Filter";
import SeatingChart from "./ShowTime.SeatingChart";
import ListShowTime from "./ShowTime.ListShowTime";
import { fetchListMovie } from "app/redux/movieSlice";
import ShowTimeFormModal from "./ShowTime.FormDialog";

export default function ShowTimeManagement() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListTheaterSystem({}));
    dispatch(fetchListMovie({}));
  }, [dispatch]);

  return (
    <div>
      <ShowTimeFormModal />
      <ShowTimeFilter />
      <div className="w-full flex mt-10 ">
        <div className="w-5/12 h-full mr-10">
          <ListShowTime />
        </div>
        <div className="w-max  h-full">
          <h1 className="text-lg font-bold pb-2 border-b">Sơ đồ chỗ ngồi</h1>
          <div className="w-full h-full">{<SeatingChart />}</div>
        </div>
      </div>
    </div>
  );
}
