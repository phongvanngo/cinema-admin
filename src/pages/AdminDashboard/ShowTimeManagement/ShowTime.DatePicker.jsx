import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePickerInput = forwardRef(
  ({ value, onClick, onChange }, ref) => (
    <input
      className="h-full w-28 appearance-none rounded-full border py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500 text-gray-500"
      onClick={onClick}
      ref={ref}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
);

export default function ShowTimeDatePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<CustomDatePickerInput />}
      />
    </>
  );
}
