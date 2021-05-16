import React from "react";
import { useSelector } from "react-redux";

export default function Navbar({ handleToggleSidebar }) {
  const header_title = useSelector(
    (state) => state.common.admin_page_navbar_title
  );
  return (
    <>
      <header id="admin__navbar" className="px-3 flex items-center ">
        <button
          className="text-2xl focus:outline-none"
          onClick={() => {
            handleToggleSidebar();
          }}
        >
          <i className="bx bx-menu-alt-left" id="header-toggle-icon"></i>
        </button>
        <h1 className="text-2xl pl-4 relative -top-1 font-bold">
          {header_title}
        </h1>
      </header>
    </>
  );
}
