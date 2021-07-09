import { convertDateTime2 } from "app/myLibrary/utilities";
import { deleteShowTime, setSelectedShowtime } from "app/redux/showTimeSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const theaterType = { row: 10, col: 12 };

function checkContains(theArray, value) {
  let res = theArray.findIndex((e) => e === value);
  if (res > -1) return true;
  else return false;
}

export default function SeatingChart() {
  const dispatch = useDispatch();
  const { listSeatsPhongChieu, listBookedSeats, selectedShowTime } =
    useSelector((state) => state.showTime);

  const listPhongChieu = useSelector(
    (state) => state.phongChieu.listPhongChieu
  );

  const listMovie = useSelector((state) => state.movie.listMovie);

  const seletedCumRap = useSelector((state) => state.showTime.seletedCumRap);

  console.log("SeatingChart, listPhongChieu", listPhongChieu);
  console.log("SeatingChart, listBookedSeat", listBookedSeats);
  console.log("SeatingChart, listMovie", listMovie);

  console.log("SeatingChart, selectedShowTime: ", selectedShowTime);
  let seatsStatus = [];

  for (let i = 0; i < listSeatsPhongChieu.length; i++) {
    let seat = listSeatsPhongChieu[i];
    let index = listBookedSeats.findIndex((e) => e.maGhe === seat.maGhe);
    if (index > -1) seatsStatus.push(true);
    else seatsStatus.push(false);
  }

  let seatsStatusIndex = -1;

  console.log(
    "list seats in phong chieu - seating chart ",
    listSeatsPhongChieu
  );

  // let seatsInTheater = [];
  // for (let index = 0; index < 120; index++) {
  //   seatsInTheater.push(index);
  // }

  // let seatsInTheaterIndex = -1;
  // let bookedSeats = [4, 5, 7, 8, 12, 34, 89, 12, 33];

  let theaterColNumber = [];
  for (let index = 1; index < theaterType.col + 1; index++) {
    theaterColNumber.push(index);
  }
  let seatRow = [];
  for (let index = 0; index < theaterType.row; index++) {
    seatRow.push(String.fromCharCode(65 + index));
  }

  //find show time info
  let { phongChieuId, movieId, time } = selectedShowTime || {};
  let phongChieu = listPhongChieu.find((e) => e.id == phongChieuId);
  let movie = listMovie.find((e) => e.id == movieId);

  return (
    <div className="p-2 border mt-5">
      <div className="flex justify-between place-items-start">
        <div>
          <span>Mã lịch chiếu: </span>&nbsp;{" "}
          <span className="font-bold">
            {selectedShowTime?.id || "chưa chọn"}
          </span>
          <br />
          <span>Phòng chiếu</span>&nbsp;{" "}
          <span className="font-bold">{phongChieu?.name || "chưa chọn"}</span>
          <br />
          <span>Tên phim</span>&nbsp;{" "}
          <span className="font-bold">{movie?.name || "chưa chọn"}</span>
          <br />
          <span>Giờ chiếu</span>&nbsp;{" "}
          <span className="font-bold">
            {convertDateTime2(time) || "chưa chọn"}
          </span>
          <br />
          <span>Thời lượng</span>&nbsp;{" "}
          <span className="font-bold">
            {(selectedShowTime?.thoiLuong || 0) + " phút"}
          </span>
        </div>
        <div>
          <button
            onClick={() => {
              // dispatch(openShowTimeFormDialog());
              if (selectedShowTime) {
                if (window.confirm("Bạn có chắc chắn xóa")) {
                  dispatch(deleteShowTime(selectedShowTime.id));
                  dispatch(setSelectedShowtime(null));
                }
              }
            }}
            className="flex-none hover:bg-red-900 focus:outline-none flex items-center bg-red-500 appearance-none  rounded-full w-100 h-full  py-2 px-5 text-admin_color_2 leading-tight"
          >
            <i className="bx bxs mr-2 align-middle block"></i>
            <span>Xóa</span>
          </button>
        </div>
      </div>

      <table className="table-auto">
        <thead>
          <tr className="">
            <th></th>
            {theaterColNumber.map((e, index) => (
              <th key={index + 1}>{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {seatRow.map((e, index) => (
            <tr key={index}>
              <th className="p-3">{e}</th>
              {theaterColNumber.map((e, index) => {
                // seatsInTheaterIndex++;
                seatsStatusIndex++;
                return (
                  <th key={index}>
                    <div
                      className={
                        "h-10 w-10 border bg-white m-1 shadow-sm " +
                        // (checkContains(
                        //   bookedSeats,
                        //   seatsInTheater[seatsInTheaterIndex]
                        // )
                        (seatsStatus[seatsStatusIndex]
                          ? " bg-yellow-300"
                          : " bg-white")
                      }
                    ></div>
                    {/* <div
                      className={
                        "h-10 w-10 border m-1 shadow-sm " +
                        checkContains(
                          bookedSeats,
                          seatsInTheater[seatsInTheaterIndex]
                        )
                          ? " bg-yellow-300"
                          : " bg-white"
                      }
                    >
                      
                    </div> */}
                  </th>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
