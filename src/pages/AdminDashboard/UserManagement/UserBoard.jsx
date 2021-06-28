import {
  filterArrayBySearchTerm,
  numberWithSpaces,
} from "app/myLibrary/utilities";
import React from "react";
import { useState } from "react";

export default function UserBoard({ listUsers }) {
  console.log(listUsers);

  let diamond = [];
  let gold = [];
  let sliver = [];
  let loyal = [];
  let ordinary = [];

  const [searchTerm, setSearchTerm] = useState("");

  let currentListUsers = filterArrayBySearchTerm(listUsers, searchTerm);

  for (let user of currentListUsers) {
    switch (user.maLoaiNguoiDung) {
      case 1:
        diamond.push(user);
        break;
      case 2:
        gold.push(user);
        break;
      case 3:
        sliver.push(user);
        break;
      case 4:
        loyal.push(user);
        break;
      case 5:
        ordinary.push(user);
        break;

      default:
        break;
    }
  }

  const dataToRender = [
    { title: "Khách hàng kim cương", logo: "/image/05.png", users: diamond },
    { title: "Khách hàng vàng", logo: "/image/01.png", users: gold },
    { title: "Khách hàng bạc", logo: "/image/02.png", users: sliver },
    { title: "Khách hàng thân thiết", logo: "/image/03.png", users: loyal },
    { title: "Khách hàng bình thường", logo: "/image/04.png", users: ordinary },
  ];

  return (
    <div className="">
      <div className="flex items-center h-10 mb-4">
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
      <div className="flex gap-5 mb-5">
        <div className="flex-none w-52 pb-5 pt-2 px-2 leading-8 bg-green-400 rounded-md text-white">
          <p>
            <i class="bx bx-user"></i>
            &nbsp; Tổng người dùng
          </p>
          <h1 className=" font-bold text-4xl text-center">
            {numberWithSpaces(12411)}
          </h1>
        </div>
        <div className="flex-none w-52 pb-5 pt-2 px-2 leading-8 bg-yellow-400 rounded-md text-white">
          <p>
            <i class="bx bxs-diamond"></i>
            &nbsp; Hạng kim cương
          </p>
          <h1 className="font-bold text-4xl text-center">
            {numberWithSpaces(12411)}
          </h1>
        </div>
        <div className="flex-none w-52 pb-5 pt-2 px-2 leading-8 bg-blue-300 rounded-md text-white">
          <p>
            <i class="bx bx-user"></i>
            &nbsp; Hạng vàng
          </p>
          <h1 className="font-bold text-4xl text-center">
            {numberWithSpaces(12411)}
          </h1>
        </div>
        <div className="flex-none w-52 pb-5 pt-2 px-2 leading-8 bg-blue-500 rounded-md text-white">
          <p>
            <i class="bx bx-user"></i>
            &nbsp; Hạng bạc
          </p>
          <h1 className="font-bold text-4xl text-center">
            {numberWithSpaces(12411)}
          </h1>
        </div>
        <div className="flex-none w-52 pb-5 pt-2 px-2 leading-8 bg-pink-400 rounded-md text-white">
          <p>
            <i class="bx bx-user"></i>
            &nbsp; Thân thiết
          </p>
          <h1 className="font-bold text-4xl text-center">
            {numberWithSpaces(12411)}
          </h1>
        </div>
        <div className="flex-none w-52 pb-5 pt-2 px-2 leading-8 bg-purple-500 rounded-md text-white">
          <p>
            <i class="bx bx-user"></i>
            &nbsp; Bình thường
          </p>
          <h1 className="font-bold text-4xl text-center">
            {numberWithSpaces(12411)}
          </h1>
        </div>
      </div>
      <div style={{ width: "max-content" }} className="flex items-start">
        {dataToRender.map((data) => (
          <UserColumn dataInfo={{ ...data }} />
        ))}
      </div>
    </div>
  );
}

function UserColumn({ dataInfo }) {
  const { logo, title, users } = dataInfo;
  if (users.length === 0) return null;
  return (
    <div className="w-80 flex-none bg-white rounded-md shadow-md mr-5">
      <div className="h-14 flex items-center justify-between mb-3 py-2 px-3">
        <h1 className=" text-xl">{title}</h1>
        <img className="h-full" src={logo} alt="diamond" />
      </div>
      <div className="">
        {(users || []).map((user, index) => {
          return (
            <div className="p-2 flex items-center border-t border-gray-100 cursor-pointer hover:bg-gray-100">
              <div className="flex-none w-10 text-center">
                <h1 className=" text-2xl font-bold text-gray-300">
                  {index + 1}
                </h1>
              </div>
              <div className="w-14 h-14 p-1 rounded-md">
                <img src={user.avatar} className="w-full h-full flex-none" />
              </div>
              <div className="flex-grow">
                <p className="font-bold text-blue-700">{user.username}</p>
                <p className="text-gray-500">{user.diemTichLuy}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
