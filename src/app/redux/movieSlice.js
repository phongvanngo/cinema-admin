import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminLogOut } from "./adminAuthSlice";
import { toast } from "react-toastify";
import movieApi from "app/api/movieApi";
import { openErrorNofificationDialog } from "./dialogSlice";
import { startLoading, stopLoading } from "./loadingSlice";

const initialState = {
  listMovie: [],
};

export const fetchListMovie = createAsyncThunk(
  "movie/fetchListMovie",
  async (payload, thunkApi) => {
    if (payload !== null) {
    }
    const { dispatch } = thunkApi;
    dispatch(startLoading());
    try {
      const response = await movieApi.getListMovie();

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
export const createMovie = createAsyncThunk(
  "movie/createMovie",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(startLoading());
    try {
      const response = await movieApi.postMovie(payload);
      switch (response.status) {
        case 200:
          // dispatch(notify({ message: "Đăng nhập thành công", options: { variant: 'success' } }));
          dispatch(stopLoading());
          return { newMovie: payload, responseData: response.data };
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
export const updateMovie = createAsyncThunk(
  "movie/updateMovie",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(startLoading());
    try {
      const response = await movieApi.patchMovie(payload);
      switch (response.status) {
        case 200:
          dispatch(stopLoading());
          return { newMovie: payload, responseData: response.data };
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
export const deleteMovie = createAsyncThunk(
  "movie/deleteMovie",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(startLoading());
    try {
      const response = await movieApi.deleteMovie(payload);
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

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListMovie.fulfilled, (state, action) => {
        if (action.payload === null) return;
        const { listMovie } = action.payload;
        state.listMovie = listMovie;
      })
      .addCase(createMovie.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { newMovie, responseData } = action.payload;

        newMovie = { ...newMovie, id: responseData.id };

        let newListMovie = state.listMovie;
        newListMovie.push(newMovie);

        state.listMovie = newListMovie;
      })
      .addCase(updateMovie.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { newMovie } = action.payload;

        let newListMovie = [...state.listMovie];

        let index = newListMovie.findIndex(
          (movieSystem) => movieSystem.id === newMovie.id
        );
        newListMovie[index] = newMovie;

        state.listMovie = newListMovie;
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { id } = action.payload;

        state.listMovie = state.listMovie.filter(
          (movieSystem) => movieSystem.id !== id
        );
      });
  },
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
