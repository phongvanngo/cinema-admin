import {
  convertDateTime,
  filterArrayBySearchTerm,
} from "app/myLibrary/utilities";
import { openUserDetailDialog } from "app/redux/dialogSlice";
import { deleteUser } from "app/redux/userSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MenuDropdown from "./User.menu";

export default function UserTable({ listUser }) {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  let currentListUser = filterArrayBySearchTerm(listUser, searchTerm);

  const handleEditUser = (userData) => {
    dispatch(openUserDetailDialog(userData));
  };

  const handleDeleteUser = (id) => {
    if (window.confirm("Bạn có chắc chắn xóa")) {
      dispatch(deleteUser(id));
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
        <div className="p-6 flex justify-between items-center h-20 border-b border-gray-200 rounded-t-3xl bg-white">
          <h1 className="text-xl font-medium">Danh sách người dùng</h1>
          {/* <button
            onClick={() => {
              dispatch(openUserFormDialog({ id: null }));
            }}
            className="flex items-center bg-admin_color_1 appearance-none  rounded-full w-100 h-full  py-2 px-8 text-admin_color_2 leading-tight hover:bg-indigo-900 focus:outline-none"
          >
            <i className="bx bx-plus mr-2 align-middle block"></i>
            <span>Thêm thể loại phim</span>
          </button> */}
        </div>
        <div className="px-8 py-6 rounded-b-3xl bg-white shadow-sm">
          <table className="table-fixed w-full mb-10">
            <thead className="">
              <tr className="uppercase border-b border-gray-200 text-left text-base font-extrabold text-gray-500 tracking-widest">
                <th scope="col" className="w-1/12 px-2 py-3 break-words">
                  <strong>#</strong>
                </th>
                <th scope="col" className="w-1/12 px-2 py-3 break-words">
                  <strong></strong>
                </th>
                <th scope="col" className="w-2/12 px-2 py-3 break-words">
                  <strong>Họ tên</strong>
                </th>
                <th scope="col" className="w-3/12 px-2 py-3 break-words">
                  <strong>Email</strong>
                </th>
                <th scope="col" className="w-2/12 px-2 py-3 break-words">
                  <strong>Điện thoại</strong>
                </th>
                <th scope="col" className="w-1/12 px-2 py-3 break-words">
                  <strong>Điểm tích lũy</strong>
                </th>
                <th scope="col" className="w-1/12 px-2 py-3 break-words">
                  <strong>Tổng điểm tích lũy</strong>
                </th>
                <th scope="col" className="w-1/12 px-2 py-3 break-words">
                  <strong></strong>
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-500 font-normal">
              {currentListUser.map((user, index) => {
                const {
                  id,
                  avatar,
                  email,
                  ngaySinh,
                  diemTichLuy,
                  tongDiemTichLuy,
                  soDT,
                  hoTen,
                } = user;
                return (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-2 py-4 text-gray-500 text-sm font-extrabold">
                      <strong>{index + 1}</strong>
                    </td>
                    <td className="px-2 py-4">
                      <img
                        className="h-20 w-20 rounded-lg"
                        alt="logo"
                        src={avatar}
                      />
                    </td>
                    <td className="px-2 py-4 break-words">
                      <strong>{hoTen}</strong>
                    </td>
                    <td className="px-2 py-4 break-words">
                      <strong>{email}</strong>
                    </td>
                    <td className="px-2 py-4 break-words">
                      <strong>{soDT}</strong>
                    </td>
                    <td className="px-2 py-4">{diemTichLuy}</td>
                    <td className="px-2 py-4">{tongDiemTichLuy}</td>
                    <td className="px-2 py-4">
                      <MenuDropdown
                        handleDelete={() => {
                          handleDeleteUser(id);
                        }}
                        handleEdit={() => {
                          handleEditUser(user);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {currentListUser.length === 0 ? (
            <div className="text-center text-xl text-gray-500">
              <span>Không có người dùng nào</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
