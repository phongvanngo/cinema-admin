import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminLogOut } from "./adminAuthSlice";
import { toast } from "react-toastify";
import movieTypeApi from "app/api/movieTypeApi";
import {
  closeMovieTypeFormDialog,
  openErrorNofificationDialog,
} from "./dialogSlice";
import { startLoading, stopLoading } from "./loadingSlice";

const initialState = {
  listMovieType: [],
};

export const fetchListMovieType = createAsyncThunk(
  "movieType/fetchListMovieType",
  async (payload, thunkApi) => {
    if (payload !== null) {
    }
    const { dispatch } = thunkApi;
    dispatch(startLoading());
    try {
      const response = await movieTypeApi.getListMovieType();

      switch (response.status) {
        case 200:
          dispatch(stopLoading());
          return response.data;
        case 442:
          throw { mess: "Dữ liệu đầu vào không hợp lệ" };
        case 401:
          throw { mess: "Bạn không có quyền thực hiện thao tác này" };
        case 403:
          dispatch(adminLogOut());

        default:
          throw { mess: "Thất bại, hãy thử lại" };
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
export const createMovieType = createAsyncThunk(
  "movieType/createMovieType",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(startLoading());
    try {
      const response = await movieTypeApi.postMovieType(payload);
      switch (response.status) {
        case 200:
          toast.success("Tạo mới thành công");
          dispatch(closeMovieTypeFormDialog());
          dispatch(stopLoading());
          return { newMovieType: payload, responseData: response.data };
        case 442:
          throw { mess: "Dữ liệu đầu vào không hợp lệ" };
        case 401:
          throw { mess: "Bạn không có quyền thực hiện thao tác này" };
        case 403:
          dispatch(adminLogOut());
        default:
          throw { mess: "Thất bại, hãy thử lại" };
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
export const updateMovieType = createAsyncThunk(
  "movieType/updateMovieType",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(startLoading());
    try {
      const response = await movieTypeApi.patchMovieType(payload);
      switch (response.status) {
        case 200:
          toast.success("Cập nhật thành công");
          dispatch(closeMovieTypeFormDialog());
          dispatch(stopLoading());
          return { newMovieType: payload, responseData: response.data };
        case 442:
          throw { mess: "Dữ liệu đầu vào không hợp lệ" };
        case 401:
          throw { mess: "Bạn không có quyền thực hiện thao tác này" };
        case 403:
          dispatch(adminLogOut());
        default:
          throw { mess: "Thất bại, hãy thử lại" };
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
export const deleteMovieType = createAsyncThunk(
  "movieType/deleteMovieType",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(startLoading());
    try {
      const response = await movieTypeApi.deleteMovieType(payload);
      switch (response.status) {
        case 200:
          // dispatch(notify({ message: "Đăng nhập thành công", options: { variant: 'success' } }));
          dispatch(stopLoading());
          return { id: payload, responseData: response.data };
        case 442:
          throw { mess: "Dữ liệu đầu vào không hợp lệ" };
        case 401:
          throw { mess: "Bạn không có quyền thực hiện thao tác này" };
        case 403:
          dispatch(adminLogOut());
        default:
          throw { mess: "Thất bại, hãy thử lại" };
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

export const movieTypeSlice = createSlice({
  name: "movieType",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListMovieType.fulfilled, (state, action) => {
        if (action.payload === null) return;
        const { listMovieType } = action.payload;
        state.listMovieType = listMovieType;
      })
      .addCase(createMovieType.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { newMovieType, responseData } = action.payload;

        newMovieType = { ...newMovieType, id: responseData.id };

        let newListMovieType = state.listMovieType;
        newListMovieType.push(newMovieType);

        state.listMovieType = newListMovieType;
      })
      .addCase(updateMovieType.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { newMovieType } = action.payload;

        let newListMovieType = [...state.listMovieType];

        let index = newListMovieType.findIndex(
          (movieTypeSystem) => movieTypeSystem.id === newMovieType.id
        );
        newListMovieType[index] = newMovieType;

        state.listMovieType = newListMovieType;
      })
      .addCase(deleteMovieType.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { id } = action.payload;

        state.listMovieType = state.listMovieType.filter(
          (movieTypeSystem) => movieTypeSystem.id !== id
        );
      });
  },
});

export const {} = movieTypeSlice.actions;

export default movieTypeSlice.reducer;
