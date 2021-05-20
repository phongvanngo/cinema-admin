import { fetchListTheaterSystem } from "app/redux/theaterSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ShowTimeFilter from "./ShowTime.Filter";
import ShowTimeDatePicker from "./ShowTime.DatePicker";

export default function ShowTimeManagement() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListTheaterSystem({}));
  }, [dispatch]);

  const theaterType = { row: 10, col: 12 };

  function SeatChart() {
    let theaterColNumber = [];
    for (let index = 1; index < theaterType.col + 1; index++) {
      theaterColNumber.push(index);
    }
    let seatRow = [];
    for (let index = 0; index < theaterType.row; index++) {
      seatRow.push(String.fromCharCode(65 + index));
    }

    return (
      <div className="p-2 border mt-5">
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
                {theaterColNumber.map((e, index) => (
                  <th key={index}>
                    <div className="h-10 w-10 border bg-white m-1 shadow-sm"></div>
                  </th>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div>
      <ShowTimeFilter />
      <div className="w-full flex mt-10 ">
        <div className="w-5/12 h-full mr-10">
          <h1 className="text-lg font-bold pb-2 border-b ">
            Danh sách suất chiếu
          </h1>
          <div className="flex items-center justify-between  mt-5">
            <div className="flex items-center">
              <span className="mr-4">Chọn ngày</span>
              <ShowTimeDatePicker />
            </div>
            <button className="flex items-center bg-admin_color_1 appearance-none  rounded-full w-100 h-full  py-2 px-3 text-admin_color_2 leading-tight hover:bg-indigo-900 focus:outline-none">
              <i className="bx bx-plus mr-2 align-middle block"></i>
              <span>Thêm suất chiếu</span>
            </button>
          </div>
          <div className="mt-5">
            <div className="flex mb-3">
              <div className="w-24 px-1">
                <img
                  className="w-full max-h-full rounded-md"
                  src="https://picsum.photos/300/400"
                  atl="logo-film"
                />
              </div>

              <div className="ml-2 w-full">
                <h1 className=" uppercase font-bold text-lg">
                  Nàng bạch tuyết và bảy chú lùn
                </h1>
                <div className="mt-2 w-full flex items-center text-sm flex-wrap">
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mb-3">
              <div className="w-24 px-1">
                <img
                  className="w-full max-h-full rounded-md"
                  src="https://picsum.photos/300/400"
                  atl="logo-film"
                />
              </div>
              <div className="ml-2 w-full">
                <h1 className=" uppercase font-bold text-lg">
                  Nàng bạch tuyết và bảy chú lùn
                </h1>
                <div className="mt-2 w-full flex items-center text-sm flex-wrap">
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mb-3">
              <div className="w-24 px-1">
                <img
                  className="w-full max-h-full rounded-md"
                  src="https://picsum.photos/300/400"
                  atl="logo-film"
                />
              </div>
              <div className="ml-2 w-full">
                <h1 className=" uppercase font-bold text-lg">
                  Nàng bạch tuyết và bảy chú lùn
                </h1>
                <div className="mt-2 w-full flex items-center text-sm flex-wrap">
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mb-3">
              <div className="w-24 px-1">
                <img
                  className="w-full max-h-full rounded-md"
                  src="https://picsum.photos/300/400"
                  atl="logo-film"
                />
              </div>
              <div className="ml-2 w-full">
                <h1 className=" uppercase font-bold text-lg">
                  Nàng bạch tuyết và bảy chú lùn
                </h1>
                <div className="mt-2 w-full flex items-center text-sm flex-wrap">
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                  <div className="mr-2 mb-2 px-3 py-1  bg-yellow-50  border flex justify-center cursor-pointer hover:bg-yellow-300 ">
                    12:45
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-max  h-full">
          <h1 className="text-lg font-bold pb-2 border-b">Sơ đồ chỗ ngồi</h1>
          <div className="w-full h-full">{<SeatChart />}</div>
        </div>
      </div>
    </div>
  );
}
