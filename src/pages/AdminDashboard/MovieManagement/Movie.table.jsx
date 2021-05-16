import {
  convertDateTime,
  filterArrayBySearchTerm,
} from "app/myLibrary/utilities";
import { openMovieFormDialog } from "app/redux/dialogSlice";
import { deleteMovie } from "app/redux/movieSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MenuDropdown from "./Movie.table.menu";

export default function MovieTable({ listMovie }) {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  let currentListMovie = filterArrayBySearchTerm(listMovie, searchTerm);

  const handleEditMovie = (movieData) => {
    dispatch(openMovieFormDialog(movieData));
  };

  const handleDeleteMovie = (id) => {
    if (window.confirm("Bạn có chắc chắn xóa")) {
      dispatch(deleteMovie(id));
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
          <h1 className="text-xl font-medium">Danh sách phim</h1>
          <button
            onClick={() => {
              dispatch(openMovieFormDialog({ id: null }));
            }}
            className="flex items-center bg-admin_color_1 appearance-none  rounded-full w-100 h-full  py-2 px-8 text-admin_color_2 leading-tight hover:bg-indigo-900 focus:outline-none"
          >
            <i className="bx bx-plus mr-2 align-middle block"></i>
            <span>Thêm phim mới</span>
          </button>
        </div>
        <div className="px-8 py-6 rounded-b-3xl bg-white shadow-sm">
          <table className="table-fixed w-full mb-10">
            <thead className="">
              <tr className="uppercase border-b border-gray-200 text-left text-base font-extrabold text-gray-500 tracking-widest">
                <th scope="col" className="w-1/12 px-2 py-3 break-words">
                  <strong>#</strong>
                </th>
                <th scope="col" className="w-2/12 px-2 py-3 break-words">
                  <strong>Tên phim</strong>
                </th>
                <th scope="col" className="w-2/12 px-2 py-3 break-words">
                  <strong>Hình ảnh</strong>
                </th>
                <th scope="col" className="w-1/12 px-2 py-3 break-words">
                  <strong>Trailer</strong>
                </th>
                <th scope="col" className="w-2/12 px-2 py-3 break-words">
                  <strong>Mô tả</strong>
                </th>
                <th scope="col" className="w-2/12 px-2 py-3 break-words">
                  <strong>Ngày khởi chiếu</strong>
                </th>
                <th scope="col" className="w-1/12 px-2 py-3 break-words">
                  <strong>Đánh giá</strong>
                </th>
                <th scope="col" className="w-1/12 px-2 py-3 break-words">
                  <strong>Action</strong>
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-500 font-normal">
              {currentListMovie.map((movie, index) => {
                const {
                  id,
                  name,
                  image,
                  trailer,
                  description,
                  premiereDay,
                  rate,
                } = movie;
                return (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-2 py-4 text-gray-500 text-sm font-extrabold">
                      <strong>{index + 1}</strong>
                    </td>
                    <td className="px-2 py-4">{name}</td>
                    <td className="px-2 py-4">
                      <img
                        className="h-20 w-20 rounded-lg"
                        alt="logo"
                        src={image}
                      />
                    </td>

                    <td className="px-2 py-4">
                      <a href={trailer}>Link</a>
                    </td>
                    <td className="px-2 py-4">{description}</td>
                    <td className="px-2 py-4">
                      {convertDateTime(premiereDay)}
                    </td>
                    <td className="px-2 py-4">{rate}</td>
                    <td className="px-2 py-4">
                      <MenuDropdown
                        handleDelete={() => {
                          handleDeleteMovie(id);
                        }}
                        handleEdit={() => {
                          handleEditMovie(movie);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {currentListMovie.length === 0 ? (
            <div className="text-center text-xl text-gray-500">
              <span>Không có rạp chiếu nào</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
