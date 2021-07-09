import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

export default function RevenueBarChar() {
  const revenueByDateTime = useSelector(
    (state) => state.statistical.revenueByDateTime
  );

  const month = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  let revenues = month.map((e) => {
    return { name: e, value: Math.floor(Math.random() * 10000000) + 1000000 };
  });
  for (let element of revenueByDateTime) {
    let index = parseInt(element.THANG, 10);
    if (index > 0 && index < 13) revenues[index - 1].value = element.DOANHTHU;
  }

  const [year, setYear] = useState(2021);

  let yearToSelect = [];
  for (let i = 2011; i <= 2021; i++) yearToSelect.push(i);

  console.log("RevenueBarChar, data", revenues);

  return (
    <div className="m-5">
      <div className="p-6  min-h-20 border-b border-gray-200 rounded-t-3xl bg-white">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium">
            Biểu đồ thể hiện doanh thu theo trong năm {" " + year}
          </h1>
          <div>
            <label>Chọn năm</label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="h-full w-full rounded-full  w-30 py-4 px-6 leading-tight focus:outline-none border  text-gray-500"
            >
              {yearToSelect.map((e) => (
                <option key={e}>{e}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="px-8 py-6 rounded-b-3xl bg-white shadow-sm">
        <div>
          <div className="mx-auto max-w-5xl">
            <Line
              data={{
                labels: revenues.map((e) => e.name),
                datasets: [
                  {
                    label: "Doanh thu",
                    data:
                      year == 2021
                        ? revenues.slice(0, 7).map((e) => e.value)
                        : revenues.map((e) => e.value),
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                      "rgba(255, 205, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(201, 203, 207, 0.2)",
                    ],
                    borderColor: [
                      "rgb(255, 99, 132)",
                      "rgb(255, 159, 64)",
                      "rgb(255, 205, 86)",
                      "rgb(75, 192, 192)",
                      "rgb(54, 162, 235)",
                      "rgb(153, 102, 255)",
                      "rgb(201, 203, 207)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              options={
                {
                  // maintainAspectRatio: true,
                }
              }
            ></Line>
          </div>
        </div>
      </div>
    </div>
  );
}
