import { adminLogOut } from "app/redux/adminAuthSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AdminRoutes } from "routes.const";
import "./AdminDashboard.scss";
import AdminDashboardRoutes from "./AdminDashboard.routes";
import Navbar from "./Navbar";

export default function LandingPage() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(adminLogOut());
  };

  useEffect(() => {
    const linkColor = document.querySelectorAll(".menu-item__title");
    console.log(linkColor);
    function colorLink() {
      if (linkColor) {
        this.parentElement.classList.toggle("active");
        linkColor.forEach((l) => {
          if (l !== this) {
            l.parentElement.classList.remove("active");
          }
        });
      }
    }
    linkColor.forEach((l) => l.addEventListener("click", colorLink));
  }, []);

  const handleToggleSidebar = () => {
    const adminLayout = document.getElementById("admin-dashboard-container");
    const headerToggle = document.getElementById("header-toggle-icon");

    if (headerToggle.classList.contains("bx-right-arrow-alt")) {
      headerToggle.classList.remove("bx-right-arrow-alt");
      headerToggle.classList.add("bx-menu-alt-left");
    } else {
      headerToggle.classList.add("bx-right-arrow-alt");
      headerToggle.classList.remove("bx-menu-alt-left");
    }

    adminLayout.classList.toggle("show-sidebar");
  };

  const {
    MOVIE_MANAGEMENT,
    THEATER_MANAGEMENT,
    SHOWTIME_MANAGEMENT,
    THEATER_SYSTEM_MANAGEMENT,
    PHONGCHIEU_MANAGEMENT,
    MOVIE_TYPE_MANAGEMENT,
  } = AdminRoutes;

  return (
    <Router>
      <div id="admin-dashboard-container" className="show-sidebar">
        <aside id="admin-sidebar">
          <header
            id="admin-sidebar__header"
            className="items-center text-admin_color_2"
          >
            <div className="brand">
              <svg
                className="transform rotate-45"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="arcs"
              >
                <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                <polyline points="17 2 12 7 7 2"></polyline>
              </svg>
              <h1 className="font-extrabold text-2xl ml-3">Cinema</h1>
            </div>
          </header>
          <div className="menu-container">
            <ul className="menu-list">
              <li className="menu-item">
                <div className="menu-item__title">
                  <i className="bx bxs-home menu-item__title__icon"></i>
                  <span className="menu-item__title__name">Trang chủ</span>
                </div>
              </li>
              <li className="menu-item">
                <div className="menu-item__title">
                  <i className="bx bx-store-alt menu-item__title__icon"></i>
                  <span className="menu-item__title__name">Quản lý rạp</span>
                  <i className="bx bx-chevron-down menu-item__title__submenu-icon"></i>
                </div>
                <ul className="submenu-list">
                  <Link to={THEATER_SYSTEM_MANAGEMENT}>
                    <li>Hệ thống rạp</li>
                  </Link>
                  <Link to={THEATER_MANAGEMENT}>
                    <li>Cụm rạp</li>
                  </Link>
                  <Link to={PHONGCHIEU_MANAGEMENT}>
                    <li>Phòng chiếu</li>
                  </Link>
                </ul>
              </li>
              <li className="menu-item">
                <div className="menu-item__title">
                  <i className="bx bx-film menu-item__title__icon"></i>
                  <span className="menu-item__title__name">Quản lý phim</span>
                  <i className="bx bx-chevron-down menu-item__title__submenu-icon"></i>
                </div>
                <ul className="submenu-list">
                  <Link to={MOVIE_TYPE_MANAGEMENT}>
                    <li>Thể loại phim</li>
                  </Link>
                  <Link to={MOVIE_MANAGEMENT}>
                    <li>Phim</li>
                  </Link>
                </ul>
              </li>
              <Link to={SHOWTIME_MANAGEMENT}>
                <li className="menu-item">
                  <div className="menu-item__title">
                    <i className="bx bx-camera-movie menu-item__title__icon"></i>
                    <span className="menu-item__title__name">
                      Quản lý suất chiếu
                    </span>
                  </div>
                </li>
              </Link>
              {/* <li className="menu-item">
                <div className="menu-item__title">
                  <i className="bx bx-store-alt menu-item__title__icon"></i>
                  <span className="menu-item__title__name">Quản lý rạp</span>
                  <i className="bx bx-chevron-down menu-item__title__submenu-icon"></i>
                </div>
                <ul className="submenu-list">
                  <li>Hệ thống rạp</li>
                  <li>Cụm rạp</li>
                  <li>Cụm rạp</li>
                  <li>Cụm rạp</li>
                  <li>Cụm rạp</li>
                  <li>Cụm rạp</li>
                </ul>
              </li> */}
            </ul>
            <div className="btn-logout-wrapper">
              <div
                className="btn-logout"
                onClick={() => {
                  handleLogout();
                }}
              >
                <i className="bx bx-log-out btn-logout__icon"></i>
                <span className="btn-logout__name">Đăng xuất</span>
              </div>
            </div>
          </div>
        </aside>
        <div id="admin-main">
          <Navbar handleToggleSidebar={handleToggleSidebar} />
          <div className="main-admin-page">
            <AdminDashboardRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
}
