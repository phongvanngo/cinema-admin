import React from "react";
import ComboBoxTheaterSystem from "./ShowTime.ComboBox.TheaterSystem";
import ComboBoxCumRap from "./ShowTime.ComboBox.CumRap";

export default function FilterShowTime() {
  return (
    <div>
      <div className="w-full flex items-center">
        <ComboBoxTheaterSystem />
        <ComboBoxCumRap />
      </div>
    </div>
  );
}
