import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import phongChieuApi from "app/api/phongChieuApi";
import { openErrorNofificationDialog } from "./dialogSlice";
import { startLoading, stopLoading } from "./loadingSlice";

const initialState = {
  listPhongChieu: [],
  selectedCumRap: null,
  isActiveCreatePhongChieu: false,
};

export const fetchListPhongChieu = createAsyncThunk(
  "phongChieu/fetchListPhongChieu",
  async (payload, thunkApi) => {
    if (payload !== null) {
    }
    const { dispatch } = thunkApi;
    dispatch(startLoading());
    try {
      const response = await phongChieuApi.getListPhongChieu();

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
      console.log(error);
      return null;
    }
  }
);
export const fetchListPhongChieuInCumRap = createAsyncThunk(
  "phongChieu/fetchListPhongChieuInCumRap",
  async (payload, thunkApi) => {
    const { cumRapId } = payload;
    const { dispatch } = thunkApi;
    dispatch(startLoading());
    try {
      const response = await phongChieuApi.getListPhongChieuInCumRap(cumRapId);

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
      console.log(error);
      return null;
    }
  }
);
export const createPhongChieu = createAsyncThunk(
  "phongChieu/createPhongChieu",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;
    let selectedCumRap = thunkApi.getState().phongChieu.selectedCumRap;
    let newPhongChieu = { ...payload, ...selectedCumRap };
    dispatch(startLoading());
    try {
      const response = await phongChieuApi.postPhongChieu(newPhongChieu);
      switch (response.status) {
        case 200:
          // dispatch(notify({ message: "Đăng nhập thành công", options: { variant: 'success' } }));
          dispatch(stopLoading());
          return { newPhongChieu: newPhongChieu, responseData: response.data };
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
export const updatePhongChieu = createAsyncThunk(
  "phongChieu/updatePhongChieu",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;
    console.log(payload);
    dispatch(startLoading());
    try {
      const response = await phongChieuApi.postPhongChieu(payload);
      switch (response.status) {
        case 200:
          dispatch(stopLoading());
          return { newPhongChieu: payload, responseData: response.data };
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
export const deletePhongChieu = createAsyncThunk(
  "phongChieu/deletePhongChieu",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;
    console.log(payload);
    dispatch(startLoading());
    try {
      const response = await phongChieuApi.deletePhongChieu(payload);
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

export const phongChieuSlice = createSlice({
  name: "phongChieu",
  initialState,
  reducers: {
    setEmtyListPhongChieu: (state) => {
      state.listPhongChieu = [];
    },
    setSelectedCumRap: (state, action) => {
      state.selectedCumRap = action.payload;
    },
    activeCreatePhongChieu: (state) => {
      state.isActiveCreatePhongChieu = true;
    },
    deactiveCreatePhongChieu: (state) => {
      state.isActiveCreatePhongChieu = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListPhongChieu.fulfilled, (state, action) => {
        if (action.payload === null) return;
        const { listPhongChieu } = action.payload;
        state.listPhongChieu = listPhongChieu;
      })
      .addCase(fetchListPhongChieuInCumRap.fulfilled, (state, action) => {
        if (action.payload === null) return;
        const { listPhongChieu } = action.payload;
        state.listPhongChieu = listPhongChieu;
      })
      .addCase(createPhongChieu.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { newPhongChieu, responseData } = action.payload;

        newPhongChieu = { ...newPhongChieu, id: responseData.id };

        let newListPhongChieu = state.listPhongChieu;
        newListPhongChieu.push(newPhongChieu);

        state.listPhongChieu = newListPhongChieu;
      })
      .addCase(updatePhongChieu.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { newPhongChieu } = action.payload;

        let newListPhongChieu = [...state.listPhongChieu];

        let index = newListPhongChieu.findIndex(
          (phongChieu) => phongChieu.id === newPhongChieu.id
        );
        newListPhongChieu[index] = newPhongChieu;
        console.log(newListPhongChieu);

        state.listPhongChieu = newListPhongChieu;
      })
      .addCase(deletePhongChieu.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { id } = action.payload;

        state.listPhongChieu = state.listPhongChieu.filter(
          (phongChieu) => phongChieu.id !== id
        );
      });
  },
});

export const {
  activeCreatePhongChieu,
  deactiveCreatePhongChieu,
  setEmtyListPhongChieu,
  setSelectedCumRap,
} = phongChieuSlice.actions;

export default phongChieuSlice.reducer;
