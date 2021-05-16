import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
      console.log(response);
      switch (response.status) {
        case 200:
          dispatch(stopLoading());
          return response.data;
        case 401:
          throw new Error("Unauthorize");
        case 400:
          console.log("hi");
          throw new Error("");
        default:
          throw new Error("Error");
      }
    } catch (error) {
      dispatch(stopLoading());
      return null;
    }
  }
);
export const createMovie = createAsyncThunk(
  "movie/createMovie",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;
    console.log(payload);
    dispatch(startLoading());
    try {
      const response = await movieApi.postMovie(payload);
      switch (response.status) {
        case 200:
          // dispatch(notify({ message: "Đăng nhập thành công", options: { variant: 'success' } }));
          dispatch(stopLoading());
          return { newMovie: payload, responseData: response.data };
        case 401:
          throw new Error("Unauthorize");
        case 400:
          throw new Error("");
        default:
          throw new Error("Error");
      }
    } catch (error) {
      dispatch(
        openErrorNofificationDialog({
          title: "Thêm hệ thống rạp mới thất bại",
        })
      );
      dispatch(stopLoading());
      return null;
    }
  }
);
export const updateMovie = createAsyncThunk(
  "movie/updateMovie",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;
    console.log(payload);
    dispatch(startLoading());
    try {
      const response = await movieApi.postMovie(payload);
      switch (response.status) {
        case 200:
          dispatch(stopLoading());
          return { newMovie: payload, responseData: response.data };
        case 401:
          throw new Error("Unauthorize");
        case 400:
          throw new Error("");
        default:
          throw new Error("Error");
      }
    } catch (error) {
      dispatch(
        openErrorNofificationDialog({
          title: "Cập nhập hệ thống rạp thất bại",
        })
      );
      dispatch(stopLoading());
      return null;
    }
  }
);
export const deleteMovie = createAsyncThunk(
  "movie/deleteMovie",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;
    console.log(payload);
    dispatch(startLoading());
    try {
      const response = await movieApi.deleteMovie(payload);
      switch (response.status) {
        case 200:
          // dispatch(notify({ message: "Đăng nhập thành công", options: { variant: 'success' } }));
          dispatch(stopLoading());
          return { id: payload, responseData: response.data };
        case 401:
          throw new Error("Unauthorize");
        case 400:
          throw new Error("");
        default:
          throw new Error("Error");
      }
    } catch (error) {
      dispatch(
        openErrorNofificationDialog({
          title: "Xóa rạp thất bại",
        })
      );
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
        console.log(newListMovie);

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
