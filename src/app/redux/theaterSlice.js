import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminLogOut } from "./adminAuthSlice";
import { toast } from "react-toastify";
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
export const createTheaterSystem = createAsyncThunk(
  "theater/createTheaterSystem",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(startLoading());
    try {
      const response = await theaterApi.postTheaterSystem(payload);
      switch (response.status) {
        case 200:
          // dispatch(notify({ message: "Đăng nhập thành công", options: { variant: 'success' } }));
          dispatch(stopLoading());
          return { newTheaterSystem: payload, responseData: response.data };
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
export const updateTheaterSystem = createAsyncThunk(
  "theater/updateTheaterSystem",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(startLoading());
    try {
      const response = await theaterApi.patchTheaterSystem(payload);
      switch (response.status) {
        case 200:
          dispatch(stopLoading());
          return { newTheaterSystem: payload, responseData: response.data };
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
export const deleteTheaterSystem = createAsyncThunk(
  "theater/deleteTheaterSystem",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(startLoading());
    try {
      const response = await theaterApi.deleteTheaterSystem(payload);
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
