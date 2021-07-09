import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminLogOut } from "./adminAuthSlice";
import { toast } from "react-toastify";
import statisticalApi from "app/api/statisticalApi";
import { startLoading, stopLoading } from "./loadingSlice";

const initialState = {
  listStatistical: [],
  revenueByDateTime: [],
  revenueByTheaterSystem: [],
  revenueByMovie: [],
};

export const fetchRevenueByTheaterSystem = createAsyncThunk(
  "statistical/fetchRevenueByTheaterSystem",
  async (payload, thunkApi) => {
    if (payload !== null) {
    }
    const { dispatch } = thunkApi;
    dispatch(startLoading());
    try {
      const response = await statisticalApi.getRevenueByTheaterSystem();
      console.log("fetchRevenueByTheaterSystem, response", response);
      switch (response.status) {
        case 200:
          dispatch(stopLoading());
          return response.data;
        case 401:
          throw { mess: "Bạn không có quyền thực hiện thao tác này" };
        case 403:
          dispatch(adminLogOut());

        default:
          throw { mess: "Không thể thực hiện" };
      }
    } catch (error) {
      console.log("reduxSlice-error", error);
      if (error?.mess) {
        toast.error(error?.mess, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("Có lỗi xảy ra", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      dispatch(stopLoading());
      return null;
    }
  }
);

export const fetchRevenueByMovie = createAsyncThunk(
  "statistical/fetchRevenueByMovie",
  async (payload, thunkApi) => {
    if (payload !== null) {
    }
    const { dispatch } = thunkApi;
    dispatch(startLoading());
    try {
      const response = await statisticalApi.getRevenueByMovie();
      console.log("fetchRevenueByMovie, response", response);
      switch (response.status) {
        case 200:
          dispatch(stopLoading());
          return response.data;
        case 401:
          throw { mess: "Bạn không có quyền thực hiện thao tác này" };
        case 403:
          dispatch(adminLogOut());

        default:
          throw { mess: "Không thể thực hiện" };
      }
    } catch (error) {
      console.log("reduxSlice-error", error);
      if (error?.mess) {
        toast.error(error?.mess, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("Có lỗi xảy ra", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      dispatch(stopLoading());
      return null;
    }
  }
);
export const fetchRevenueByDateTime = createAsyncThunk(
  "statistical/fetchRevenueByDateTime",
  async (payload, thunkApi) => {
    if (payload !== null) {
    }
    const { dispatch } = thunkApi;
    dispatch(startLoading());
    try {
      const response = await statisticalApi.getRevenueByDateTime();
      console.log("fetchRevenueByMovie, response", response);
      switch (response.status) {
        case 200:
          dispatch(stopLoading());
          return response.data;
        case 401:
          throw { mess: "Bạn không có quyền thực hiện thao tác này" };
        case 403:
          dispatch(adminLogOut());

        default:
          throw { mess: "Không thể thực hiện" };
      }
    } catch (error) {
      console.log("reduxSlice-error", error);
      if (error?.mess) {
        toast.error(error?.mess, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("Có lỗi xảy ra", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      dispatch(stopLoading());
      return null;
    }
  }
);

export const statisticalSlice = createSlice({
  name: "statistical",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRevenueByTheaterSystem.fulfilled, (state, action) => {
        if (action.payload === null) return;
        const { revenues } = action.payload;
        state.revenueByTheaterSystem = revenues;
      })
      .addCase(fetchRevenueByMovie.fulfilled, (state, action) => {
        if (action.payload === null) return;
        const { revenues } = action.payload;
        state.revenueByMovie = revenues;
      })
      .addCase(fetchRevenueByDateTime.fulfilled, (state, action) => {
        if (action.payload === null) return;
        const { revenues } = action.payload;
        state.revenueByDateTime = revenues;
      });
  },
});

export const {} = statisticalSlice.actions;

export default statisticalSlice.reducer;
