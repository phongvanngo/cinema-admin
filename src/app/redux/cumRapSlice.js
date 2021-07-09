import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminLogOut } from "./adminAuthSlice";
import { toast } from "react-toastify";
import cumRapApi from "app/api/cumRapApi";
import {
  closeCumRapFormDialog,
  openErrorNofificationDialog,
} from "./dialogSlice";
import { startLoading, stopLoading } from "./loadingSlice";

const initialState = {
  listCumRap: [],
};

export const fetchListCumRap = createAsyncThunk(
  "cumRap/fetchListCumRap",
  async (payload, thunkApi) => {
    if (payload !== null) {
    }
    const { dispatch } = thunkApi;
    dispatch(startLoading());
    try {
      const response = await cumRapApi.getListCumRap();
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
export const fetchListCumRapInTheaterSystem = createAsyncThunk(
  "cumRap/fetchListCumRapInTheaterSystem",
  async (payload, thunkApi) => {
    const { theaterSystemId } = payload;
    const { dispatch } = thunkApi;
    dispatch(startLoading());
    try {
      const response = await cumRapApi.getListCumRapInTheaterSytem(
        theaterSystemId
      );

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
export const createCumRap = createAsyncThunk(
  "cumRap/createCumRap",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(startLoading());
    try {
      const response = await cumRapApi.postCumRap(payload);
      switch (response.status) {
        case 200:
          dispatch(stopLoading());
          toast.success("Tạo mới cụm rạp thành công");
          dispatch(closeCumRapFormDialog());
          return { newCumRap: payload, responseData: response.data };
        case 442:
          throw { mess: "Dữ liệu đầu vào không hợp lệ" };
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
export const updateCumRap = createAsyncThunk(
  "cumRap/updateCumRap",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(startLoading());
    try {
      const response = await cumRapApi.patchCumRap(payload);
      switch (response.status) {
        case 200:
          dispatch(stopLoading());
          toast.success("Cập nhật cụm rạp thành công");
          dispatch(closeCumRapFormDialog());
          return { newCumRap: payload, responseData: response.data };
        case 442:
          throw { mess: "Dữ liệu đầu vào không hợp lệ" };
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
export const deleteCumRap = createAsyncThunk(
  "cumRap/deleteCumRap",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(startLoading());
    try {
      const response = await cumRapApi.deleteCumRap(payload);
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

export const cumRapSlice = createSlice({
  name: "cumRap",
  initialState,
  reducers: {
    setEmtyListCumRap: (state) => {
      state.listCumRap = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListCumRap.fulfilled, (state, action) => {
        if (action.payload === null) return;
        const { listCumRap } = action.payload;
        state.listCumRap = listCumRap;
      })
      .addCase(fetchListCumRapInTheaterSystem.fulfilled, (state, action) => {
        if (action.payload === null) return;
        const { listCumRap } = action.payload;
        state.listCumRap = listCumRap;
      })
      .addCase(createCumRap.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { newCumRap, responseData } = action.payload;

        newCumRap = { ...newCumRap, id: responseData.id };

        let newListCumRap = [newCumRap, ...state.listCumRap];
        // newListCumRap.push(newCumRap);

        state.listCumRap = newListCumRap;
      })
      .addCase(updateCumRap.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { newCumRap } = action.payload;

        let newListCumRap = [...state.listCumRap];

        let index = newListCumRap.findIndex(
          (cumRap) => cumRap.id === newCumRap.id
        );
        newListCumRap[index] = newCumRap;

        state.listCumRap = newListCumRap;
      })
      .addCase(deleteCumRap.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { id } = action.payload;

        state.listCumRap = state.listCumRap.filter(
          (cumRap) => cumRap.id !== id
        );
      });
  },
});

export const { setEmtyListCumRap } = cumRapSlice.actions;

export default cumRapSlice.reducer;
