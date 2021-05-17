export const PublicRoutes = {
  LANDINGPAGE: "/",
  HOMEPAGE: "/home",
  CONTACT: "/contact",
  ABOUT: "/about",

  ADMIN_DASHBOARD: "/admin",
  ADMIN_SIGNIN: "/admin-sign-in",
  USER_DASHBOARD: "/user",
  USER_SIGNIN: "/user-sign-in",
};

export const AdminRoutes = {
  INTRODUCTION: `${PublicRoutes.ADMIN_DASHBOARD}`,
  MOVIE_MANAGEMENT: `${PublicRoutes.ADMIN_DASHBOARD}/movie-management`,
  MOVIE_TYPE_MANAGEMENT: `${PublicRoutes.ADMIN_DASHBOARD}/movie-type-management`,
  THEATER_MANAGEMENT: `${PublicRoutes.ADMIN_DASHBOARD}/theater-management`,
  PHONGCHIEU_MANAGEMENT: `${PublicRoutes.ADMIN_DASHBOARD}/phongChieu`,
  THEATER_SYSTEM_MANAGEMENT: `${PublicRoutes.ADMIN_DASHBOARD}/theater-system-management`,
  SHOWTIME_MANAGEMENT: `${PublicRoutes.ADMIN_DASHBOARD}/showtime-management`,
};

export const UserRoutes = {
  ABOUT_ME: `${PublicRoutes.USER_DASHBOARD}/about-me`,
  MY_ACTIVITY: `${PublicRoutes.USER_DASHBOARD}/my-activity`,
  MY_SETTINGS: `${PublicRoutes.USER_DASHBOARD}/my-activity`,
};
