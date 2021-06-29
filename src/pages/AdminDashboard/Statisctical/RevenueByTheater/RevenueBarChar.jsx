import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

export default function RevenueBarChar() {
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
            Biểu đồ doanh thu của từng hệ thống rạp
          </h1>
        </div>
      </div>
      <div className="px-8 py-6 rounded-b-3xl bg-white shadow-sm">
        <div>
          <div className="mx-auto max-w-xl">
            <Bar
              data={{
                labels: revenues.map((e) => e.name),
                datasets: [
                  {
                    label: "Doanh thu",
                    data: revenues.map((e) => e.value),
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
              height={200}
              // width={400}
              options={{
                maintainAspectRatio: true,
              }}
            ></Bar>
          </div>
        </div>
      </div>
    </div>
  );
}
