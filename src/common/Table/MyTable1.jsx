import React from "react";

import { people } from "./fakeTableData";

export default function MyTable() {
  return (
    <div className="w-full">
      <div className="w-full ">
        <div className="p-6 flex items-center h-16 border-b border-gray-200 rounded-t-3xl bg-white">
          <h1 className="text-xl font-medium">Danh sách hệ thống rạp</h1>
        </div>
        <div className="px-8 py-6 rounded-b-3xl bg-white shadow-sm">
          <table className="table-auto w-full mb-10">
            <thead className="">
              <tr className="uppercase border-b border-gray-200 text-left text-base font-extrabold text-gray-500 tracking-widest">
                <th scope="col" className="px-2 py-3 break-words">
                  <strong>#</strong>
                </th>
                <th scope="col" className="px-2 py-3 break-words">
                  <strong>Status</strong>
                </th>
                <th scope="col" className="px-2 py-3 break-words">
                  <strong>Status</strong>
                </th>
                <th scope="col" className="px-2 py-3 break-words">
                  <strong>Status</strong>
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-500 font-normal">
              <tr className="border-b border-gray-200">
                <td className="px-2 py-4 text-gray-500 text-sm font-extrabold">
                  <strong>01</strong>
                </td>
                <td className="px-2 py-4">Intro to CSS</td>
                <td className="px-2 py-4">Adam</td>
                <td className="px-2 py-4">858</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-2 py-4 text-gray-500 font-extrabold">
                  <strong>02</strong>
                </td>
                <td className="px-2 py-4">Intro to CSS</td>
                <td className="px-2 py-4">Adam</td>
                <td className="px-2 py-4"></td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-2 py-4 text-gray-500 font-extrabold">
                  <strong>03</strong>
                </td>
                <td className="px-2 py-4">Intro to CSS</td>
                <td className="px-2 py-4">Adam</td>
                <td className="px-2 py-4">858</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
