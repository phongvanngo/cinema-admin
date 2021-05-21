import { openShowTimeFormDialog } from "app/redux/dialogSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowTimeDatePicker from "./ShowTime.DatePicker";

function formatTimeInShowTime(time) {
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  time = new Date(time);
  let h = time.getHours();
  let m = time.getMinutes();
  h = checkTime(h);
  m = checkTime(m);

  let res = `${h}:${m}`;
  return res;
}

export default function ListShowTime() {
  const dispatch = useDispatch();
  let listShowTime = useSelector((state) => state.showTime.listShowTime);
  const isActiveCreateShowTime = useSelector(
    (state) => state.showTime.isActiveCreateShowTime
  );
  const listMovie = useSelector((state) => state.movie.listMovie);
  console.log(listShowTime);

  function classifyShowTimeByMovie(listShowTime, listMovie) {
    let listShowTimeByMovie = [];
    while (listShowTime.length > 0) {
      let movieId = listShowTime[0].movieId;
      let movie = listMovie.find((e) => e.id === movieId);
      let showTimeByMovie = { movie: movie, showTimes: [] };
      let remainingListShowTime = [];
      listShowTime.forEach((showTime) => {
        if (showTime.movieId === movieId)
          showTimeByMovie.showTimes.push(showTime);
        else remainingListShowTime.push(showTime);
      });
      listShowTimeByMovie.push(showTimeByMovie);
      listShowTime = remainingListShowTime;
    }
    return listShowTimeByMovie;
  }

  let listShowTimeByMovie = classifyShowTimeByMovie(listShowTime, listMovie);

  return (
    <>
      <h1 className="text-lg font-bold pb-2 border-b ">Danh sách suất chiếu</h1>
      <div className="flex items-center justify-between  mt-5">
        <div className="flex items-center">
          <span className="mr-4">Chọn ngày</span>
          <ShowTimeDatePicker />
        </div>
        <button
          onClick={() => {
            dispatch(openShowTimeFormDialog());
          }}
          disabled={!isActiveCreateShowTime}
          className={`focus:outline-none flex items-center bg-admin_color_1 appearance-none  rounded-full w-100 h-full  py-2 px-2 text-admin_color_2 leading-tight 
                ${
                  isActiveCreateShowTime
                    ? " hover:bg-indigo-900 "
                    : " opacity-20 "
                }
              `}
        >
          <i className="bx bx-plus mr-2 align-middle block"></i>
          <span>Thêm suất chiếu</span>
        </button>
      </div>
      <div className="mt-5">
        {listShowTimeByMovie.map((showTimeByMovie, index) => {
          const { movie, showTimes } = showTimeByMovie;
          console.log(showTimeByMovie);
          const { name, image } = movie;
          return (
            <div key={index} className="flex mb-3">
              <div className="w-24 px-1 min-h-24">
                <img
                  className="w-full max-h-24 rounded-md"
                  src={image}
                  atl="logo-film"
                />
              </div>

              <div className="ml-2 w-full">
                <h1 className=" uppercase font-bold text-lg">{name}</h1>
                <div className="mt-2 w-full flex items-center text-sm flex-wrap">
                  {showTimes.map((showTime, index) => {
                    let time_label = formatTimeInShowTime(showTime.time);
                    return (
                      <div
                        key={index}
                        className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 "
                      >
                        {time_label}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
