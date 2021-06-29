import React from "react";
import { Bar } from "react-chartjs-2";

export default function RevenueBarChar({ data }) {
  console.log("RevenueBarChar, data", data);
  const { revenues } = data;

  return (
    <>
      <div className="p-6  min-h-20 border-b border-gray-200 rounded-t-3xl bg-white">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium">
            Biểu đồ doanh thu của từng hệ thống rạp
          </h1>
        </div>
      </div>
      <div className="px-8 py-6 rounded-b-3xl bg-white shadow-sm">
        <Bar
          data={{
            labels: revenues.map((e) => e.TENHETHONGRAP),
            datasets: [
              {
                label: "Doanh thu",
                data: revenues.map((e) => e.DOANHTHU),
                backgroundColor: ["rgba(54, 162, 235, 0.2)"],
                borderColor: ["rgba(54, 162, 235, 1)"],
                borderWidth: 1,
              },
            ],
          }}
          height={200}
          // width={400}
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
          }}
        ></Bar>
      </div>
    </>
  );
}
