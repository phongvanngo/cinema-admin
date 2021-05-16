import { adminLogOut } from "app/redux/adminAuthSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AdminRoutes } from "routes.const";
import "./AdminDashboard.scss";
import AdminDashboardRoutes from "./AdminDashboard.routes";
import { combineReducers } from "redux";

export default function LandingPage() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(adminLogOut());
  };

  useEffect(() => {
    const linkColor = document.querySelectorAll(".sidebar__link");
    console.log(linkColor);
    function colorLink() {
      if (linkColor) {
        linkColor.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
      }
    }
    linkColor.forEach((l) => l.addEventListener("click", colorLink));
  }, []);

  const handleToggleSidebar = () => {
    const adminLayout = document.getElementById("admin-dashboard-container");
    const headerToggle = document.getElementById("header-toggle");
    headerToggle.classList.toggle("bx-x");
    adminLayout.classList.toggle("show-sidebar");
  };

  const {
    MOVIE_MANAGEMENT,
    THEATER_MANAGEMENT,
    SHOWTIME_MANAGEMENT,
  } = AdminRoutes;

  return (
    <Router>
      <div id="admin-dashboard-container" className="show-sidebar">
        <aside
          id="admin-sidebar"
          className="overflow-hidden fixed pb-7 px-0 bg-black "
        >
          <div className="overflow-hidden px-0 space-y-2 h-full flex flex-col justify-between">
            <div className="menu-list">
              <section className="flex items-center py-4 px-2 website-brand">
                <div className="text-4xl">
                  <i className="bx bx-certification"></i>
                </div>
                <div className="ml-3">
                  <h1 className="text-lg font-bold whitespace-nowrap">
                    SHARK CINEMA
                  </h1>
                </div>
              </section>
              <ul className="mt-5 flex flex-col space-y-5 list-none">
                <li className="px-4 sidebar__link ">
                  <Link
                    className="h-8 flex items-center cursor-pointer"
                    to={MOVIE_MANAGEMENT}
                  >
                    <span>
                      <i className="bx bxs-home"></i>
                    </span>
                    <h4 className="font-medium  ml-5 sidebar__link__title">
                      Movie{" "}
                    </h4>
                  </Link>
                </li>
                <li className="px-4 sidebar__link">
                  <Link
                    className="h-8 flex items-center cursor-pointer"
                    to={THEATER_MANAGEMENT}
                  >
                    <svg
                      width="18"
                      height="18"
                      strokeWidth="2"
                      className="sidebar__link__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      />
                    </svg>
                    <h4 className="font-medium  ml-5 sidebar__link__title">
                      Theater{" "}
                    </h4>
                  </Link>
                </li>
                <li className="px-4 sidebar__link">
                  <Link
                    className="h-8 flex items-center cursor-pointer"
                    to={SHOWTIME_MANAGEMENT}
                  >
                    <svg
                      width="18"
                      height="18"
                      strokeWidth="2"
                      className="sidebar__link__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <h4 className="font-medium  ml-5 sidebar__link__title">
                      Showtime{" "}
                    </h4>
                  </Link>
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                handleLogout();
              }}
              className="menu-list sidebar__link px-4 h-8 flex items-center cursor-pointer focus:outline-none"
            >
              <svg
                width="18"
                height="18"
                strokeWidth="2"
                className="sidebar__link__icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <h4 className="sidebar__link__title font-medium ml-5">Logout</h4>
            </button>
          </div>
        </aside>
        <div id="admin-main">
          <header className="navbar px-3 flex items-center h-16 border-b">
            <button
              className="text-2xl focus:outline-none text-primary_admin"
              onClick={() => {
                handleToggleSidebar();
              }}
            >
              <i className="bx bx-menu bx-x" id="header-toggle"></i>
            </button>
          </header>
          <div>
            <AdminDashboardRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
}
