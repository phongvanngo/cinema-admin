import React from "react";

const theaterType = { row: 10, col: 12 };

function checkContains(theArray, value) {
  let res = theArray.findIndex((e) => e === value);
  if (res > -1) return true;
  else return false;
}

export default function SeatingChart() {
  let seatsInTheater = [];
  for (let index = 0; index < 120; index++) {
    seatsInTheater.push(index);
  }

  let seatsInTheaterIndex = -1;
  let bookedSeats = [4, 5, 7, 8, 12, 34, 89, 12, 33];

  let theaterColNumber = [];
  for (let index = 1; index < theaterType.col + 1; index++) {
    theaterColNumber.push(index);
  }
  let seatRow = [];
  for (let index = 0; index < theaterType.row; index++) {
    seatRow.push(String.fromCharCode(65 + index));
  }

  return (
    <div className="p-2 border mt-5">
      <table className="table-auto">
        <thead>
          <tr className="">
            <th></th>
            {theaterColNumber.map((e, index) => (
              <th key={index + 1}>{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {seatRow.map((e, index) => (
            <tr key={index}>
              <th className="p-3">{e}</th>
              {theaterColNumber.map((e, index) => {
                seatsInTheaterIndex++;
                return (
                  <th key={index}>
                    <div
                      className={
                        "h-10 w-10 border bg-white m-1 shadow-sm " +
                        (checkContains(
                          bookedSeats,
                          seatsInTheater[seatsInTheaterIndex]
                        )
                          ? " bg-yellow-300"
                          : " bg-white")
                      }
                    ></div>
                    {/* <div
                      className={
                        "h-10 w-10 border m-1 shadow-sm " +
                        checkContains(
                          bookedSeats,
                          seatsInTheater[seatsInTheaterIndex]
                        )
                          ? " bg-yellow-300"
                          : " bg-white"
                      }
                    >
                      
                    </div> */}
                  </th>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
