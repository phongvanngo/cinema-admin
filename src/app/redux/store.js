import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter/counterSlice";
import loadingReducer from "./loadingSlice";
import adminAuthReducer from "./adminAuthSlice";
import userAuthReducer from "./userAuthSlice";
import commonReducer from "./commonSlice";
import dialogReducer from "./dialogSlice";
import theaterReducer from "./theaterSlice";
import movieReducer from "./movieSlice";
import cumRapReducer from "./cumRapSlice";
import phongChieuReducer from "./phongChieuSlice";
import movieTypeReducer from "./movieTypeSlice";
import showTimeReducer from "./showTimeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    loading: loadingReducer,
    adminAuth: adminAuthReducer,
    userAuth: userAuthReducer,
    common: commonReducer,
    dialog: dialogReducer,
    theater: theaterReducer,
    movie: movieReducer,
    cumRap: cumRapReducer,
    phongChieu: phongChieuReducer,
    movieType: movieTypeReducer,
    showTime: showTimeReducer,
  },
});
