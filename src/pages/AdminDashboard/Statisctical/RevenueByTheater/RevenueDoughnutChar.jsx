import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function RevenueDoughnutChar({ data }) {
  console.log("RevenueBarChar, data", data);
  const { revenues } = data;

  return (
    <>
      <div className="p-6  min-h-20 border-b border-gray-200 rounded-t-3xl bg-white">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium">
            Tỷ lệ doanh thu của các hệ thống rạp
          </h1>
        </div>
      </div>
      <div className="px-8 py-6 rounded-b-3xl bg-white shadow-sm">
        <Doughnut
          data={{
            labels: revenues.map((e) => e.TENHETHONGRAP),
            datasets: [
              {
                label: "Doanh thu",
                data: revenues.map((e) => e.DOANHTHU),
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
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
            // maintainAspectRatio: true,
            hoverOffset: 4,
          }}
        ></Doughnut>
      </div>
    </>
  );
}
