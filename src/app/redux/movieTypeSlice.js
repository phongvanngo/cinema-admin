import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieTypeApi from "app/api/movieTypeApi";
import { openErrorNofificationDialog } from "./dialogSlice";
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
export const createMovieType = createAsyncThunk(
  "movieType/createMovieType",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;
    console.log(payload);
    dispatch(startLoading());
    try {
      const response = await movieTypeApi.postMovieType(payload);
      switch (response.status) {
        case 200:
          // dispatch(notify({ message: "Đăng nhập thành công", options: { variant: 'success' } }));
          dispatch(stopLoading());
          return { newMovieType: payload, responseData: response.data };
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
export const updateMovieType = createAsyncThunk(
  "movieType/updateMovieType",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;
    console.log(payload);
    dispatch(startLoading());
    try {
      const response = await movieTypeApi.postMovieType(payload);
      switch (response.status) {
        case 200:
          dispatch(stopLoading());
          return { newMovieType: payload, responseData: response.data };
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
export const deleteMovieType = createAsyncThunk(
  "movieType/deleteMovieType",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;
    console.log(payload);
    dispatch(startLoading());
    try {
      const response = await movieTypeApi.deleteMovieType(payload);
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
        console.log(newListMovieType);

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
