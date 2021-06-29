import React from "react";
import { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

export default function RevenueDoughnutChar() {
  const listTheaterSystem = useSelector(
    (state) => state.theater.listTheaterSystem
  );
  const revenueByTheaterSystem = useSelector(
    (state) => state.statistical.revenueByTheaterSystem
  );

  let revenues = [];
  for (let theaterSystem of listTheaterSystem) {
    let name = theaterSystem.name;
    let element = revenueByTheaterSystem.find((e) => e.TENHETHONGRAP === name);
    if (element) {
      revenues.push({ name, value: element.DOANHTHU });
    } else {
      revenues.push({ name, value: 0 });
    }
  }
  console.log("RevenueBarChar, data", revenues);

  return (
    <div className="m-5">
      <div className="p-6  min-h-20 border-b border-gray-200 rounded-t-3xl bg-white">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium">
            Tỷ lệ doanh thu của các hệ thống rạp
          </h1>
        </div>
      </div>
      <div className="px-8 py-6 rounded-b-3xl bg-white shadow-sm">
        <div className="">
          <div className="mx-auto max-w-md">
            <Doughnut
              data={{
                labels: revenues.map((e) => e.name),
                datasets: [
                  {
                    label: "Doanh thu",
                    data: revenues.map((e) => e.value),
                    backgroundColor: [
                      "rgba(255, 99, 132)",
                      "rgba(255, 159, 64)",
                      "rgba(255, 205, 86)",
                      "rgba(75, 192, 192)",
                      "rgba(54, 162, 235)",
                      "rgba(153, 102, 255)",
                      "rgba(201, 203, 207)",
                    ],
                    borderColor: ["rgba(54, 162, 235, 1)"],
                    borderWidth: 1,
                  },
                ],
              }}
              height={"50px"}
              width={"50px"}
              options={{
                // scales: {
                //   y: {
                //     beginAtZero: true,
                //   },
                //   x: {
                //     beginAtZero: true,
                //   },
                // },
                maintainAspectRatio: true,
                hoverOffset: 4,
              }}
            ></Doughnut>
          </div>
        </div>
      </div>
    </div>
  );
}
