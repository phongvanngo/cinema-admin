import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import theaterApi from "app/api/theaterApi";
import { openErrorNofificationDialog } from "./dialogSlice";
import { startLoading, stopLoading } from "./loadingSlice";

const initialState = {
  listTheaterSystem: [],
};

export const fetchListTheaterSystem = createAsyncThunk(
  "theater/fetchListTheaterSystem",
  async (payload, thunkApi) => {
    if (payload !== null) {
    }
    const { dispatch } = thunkApi;
    dispatch(startLoading());
    try {
      const response = await theaterApi.getListTheaterSystem();
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
export const createTheaterSystem = createAsyncThunk(
  "theater/createTheaterSystem",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;
    console.log(payload);
    dispatch(startLoading());
    try {
      const response = await theaterApi.postTheaterSystem(payload);
      switch (response.status) {
        case 200:
          // dispatch(notify({ message: "Đăng nhập thành công", options: { variant: 'success' } }));
          dispatch(stopLoading());
          return { newTheaterSystem: payload, responseData: response.data };
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
export const updateTheaterSystem = createAsyncThunk(
  "theater/updateTheaterSystem",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;
    console.log(payload);
    dispatch(startLoading());
    try {
      const response = await theaterApi.postTheaterSystem(payload);
      switch (response.status) {
        case 200:
          dispatch(stopLoading());
          return { newTheaterSystem: payload, responseData: response.data };
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
export const deleteTheaterSystem = createAsyncThunk(
  "theater/deleteTheaterSystem",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;
    console.log(payload);
    dispatch(startLoading());
    try {
      const response = await theaterApi.deleteTheaterSystem(payload);
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

export const theaterSlice = createSlice({
  name: "theater",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListTheaterSystem.fulfilled, (state, action) => {
        if (action.payload === null) return;
        const { listTheaterSystem } = action.payload;
        state.listTheaterSystem = listTheaterSystem;
      })
      .addCase(createTheaterSystem.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { newTheaterSystem, responseData } = action.payload;

        newTheaterSystem = { ...newTheaterSystem, id: responseData.id };

        let newListTheaterSystem = state.listTheaterSystem;
        newListTheaterSystem.push(newTheaterSystem);

        state.listTheaterSystem = newListTheaterSystem;
      })
      .addCase(updateTheaterSystem.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { newTheaterSystem } = action.payload;

        let newListTheaterSystem = [...state.listTheaterSystem];

        let index = newListTheaterSystem.findIndex(
          (theaterSystem) => theaterSystem.id === newTheaterSystem.id
        );
        newListTheaterSystem[index] = newTheaterSystem;
        console.log(newListTheaterSystem);

        state.listTheaterSystem = newListTheaterSystem;
      })
      .addCase(deleteTheaterSystem.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { id } = action.payload;

        state.listTheaterSystem = state.listTheaterSystem.filter(
          (theaterSystem) => theaterSystem.id !== id
        );
      });
  },
});

export const {} = theaterSlice.actions;

export default theaterSlice.reducer;
