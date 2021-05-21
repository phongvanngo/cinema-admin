import { filterArrayBySearchTerm } from "app/myLibrary/utilities";
import { openPhongChieuFormDialog } from "app/redux/dialogSlice";
import { deletePhongChieu } from "app/redux/phongChieuSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuDropdown from "./PhongChieu.table.menu";
import FilterTheaterSystem from "./PhongChieu.table.filterTheaterSystem";
import FilterCumRap from "./PhongChieu.table.filterCumRap";

export default function PhongChieuTable({ listPhongChieu }) {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const isActiveCreatePhongChieu = useSelector(
    (state) => state.phongChieu.isActiveCreatePhongChieu
  );

  let currentListPhongChieu = filterArrayBySearchTerm(
    listPhongChieu,
    searchTerm
  );

  const handleEditPhongChieu = (phongChieuData) => {
    dispatch(openPhongChieuFormDialog(phongChieuData));
  };

  const handleDeletePhongChieu = (id) => {
    if (window.confirm("Bạn có chắc chắn xóa")) {
      dispatch(deletePhongChieu(id));
    }
  };

  return (
    <div className="w-full">
      <div className="w-full ">
        <div className="w-full flex justify-between items-center mb-5">
          <div className="flex items-center h-10 ">
            <input
              className="h-full appearance-none rounded-l-full border w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              placeholder="Tìm kiếm"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <div className="bg-admin_color_1 rounded-r-full h-full w-12 p-1 flex justify-center hover:bg-indigo-900">
              <i className="bx bx-search-alt text-2xl text-white m-auto "></i>
            </div>
          </div>
        </div>
        <div className="p-6  min-h-20 border-b border-gray-200 rounded-t-3xl bg-white">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-medium">Danh sách phòng chiếu</h1>
            <button
              disabled={!isActiveCreatePhongChieu}
              onClick={() => {
                dispatch(openPhongChieuFormDialog({ id: null }));
              }}
              className={`focus:outline-none flex items-center bg-admin_color_1 appearance-none  rounded-full w-100 h-full  py-2 px-8 text-admin_color_2 leading-tight 
                ${
                  isActiveCreatePhongChieu
                    ? " hover:bg-indigo-900 "
                    : " opacity-20 "
                }
              `}
            >
              <i className="bx bx-plus mr-2 align-middle block"></i>
              <span>Thêm phòng chiếu mới</span>
            </button>
          </div>
          <div className="flex items-center">
            <FilterTheaterSystem />
            <FilterCumRap />
          </div>
        </div>
        <div className="px-8 py-6 rounded-b-3xl bg-white shadow-sm">
          <table className="table-fixed w-full mb-10">
            <thead className="">
              <tr className="uppercase border-b border-gray-200 text-left text-base font-extrabold text-gray-500 tracking-widest">
                <th scope="col" className="w-1/12 px-2 py-3 break-words">
                  <strong>#</strong>
                </th>
                <th scope="col" className="w-3/12 px-2 py-3 break-words">
                  <strong>Tên phòng chiếu</strong>
                </th>
                <th scope="col" className="w-3/12 px-2 py-3 break-words">
                  <strong>Số lượng ghế</strong>
                </th>
                <th scope="col" className="w-4/12 px-2 py-3 break-words">
                  <strong>Tên cụm rạp</strong>
                </th>
                <th scope="col" className="w-1/12 px-2 py-3 break-words">
                  <strong>Action</strong>
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-500 font-normal">
              {currentListPhongChieu.map((phongChieu, index) => {
                const { id, name, amountSeats, cumRapName } = phongChieu;
                return (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-2 py-4 text-gray-500 text-sm font-extrabold">
                      <strong>{index + 1}</strong>
                    </td>
                    <td className="px-2 py-4">{name}</td>
                    <td className="px-2 py-4">{120}</td>
                    <td className="px-2 py-4">{cumRapName}</td>
                    <td className="px-2 py-4">
                      <MenuDropdown
                        handleDelete={() => {
                          handleDeletePhongChieu(id);
                        }}
                        handleEdit={() => {
                          handleEditPhongChieu(phongChieu);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {currentListPhongChieu.length === 0 ? (
            <div className="text-center text-xl text-gray-500">
              <span>Không có phòng chiếu nào</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
