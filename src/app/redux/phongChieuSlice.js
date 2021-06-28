import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminLogOut } from "./adminAuthSlice";
import { toast } from "react-toastify";
import phongChieuApi from "app/api/phongChieuApi";
import {
  closePhongChieuFormDialog,
  openErrorNofificationDialog,
} from "./dialogSlice";
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
      dispatch(stopLoading());

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
      dispatch(stopLoading());

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
          toast.success("Tạo phòng chiếu thành công");
          dispatch(closePhongChieuFormDialog());
          dispatch(stopLoading());
          return { newPhongChieu: newPhongChieu, responseData: response.data };
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
export const updatePhongChieu = createAsyncThunk(
  "phongChieu/updatePhongChieu",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(startLoading());
    try {
      const response = await phongChieuApi.patchPhongChieu(payload);
      switch (response.status) {
        case 200:
          toast.success("Cập nhật phòng chiếu thành công");
          dispatch(closePhongChieuFormDialog());
          dispatch(stopLoading());
          return { newPhongChieu: payload, responseData: response.data };
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
export const deletePhongChieu = createAsyncThunk(
  "phongChieu/deletePhongChieu",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(startLoading());
    try {
      const response = await phongChieuApi.deletePhongChieu(payload);
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
        if (action.payload === null) {
          state.listPhongChieu = [];
          return;
        }
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
