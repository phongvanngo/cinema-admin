import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminLogOut } from "./adminAuthSlice";
import { toast } from "react-toastify";
import showTimeApi from "app/api/showTimeApi";
import {
  closeMovieFormDialog,
  closeShowTimeFormDialog,
  openErrorNofificationDialog,
} from "./dialogSlice";
import { startLoading, stopLoading } from "./loadingSlice";

const initialState = {
  listShowTime: [],
  selectedCumRap: null,
  selectedMaHeThongRap: null,
  selectedDate: new Date().toISOString(),
  isActiveCreateShowTime: false,

  selectedShowTime: null,
  listSeatsPhongChieu: [],
  listBookedSeats: [],
};

export const fetchListShowTime = createAsyncThunk(
  "showTime/fetchListShowTime",
  async (payload, thunkApi) => {
    if (payload) {
    }
    const { dispatch, getState } = thunkApi;
    const { selectedCumRap, selectedDate, selectedMaHeThongRap } =
      getState().showTime;

    let params = {
      cumRapId: selectedCumRap.cumRapId,
      time: selectedDate,
    };

    dispatch(startLoading());
    try {
      const response = await showTimeApi.getListShowTime(params);

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
      console.log("fechtListShowTime, error", error);
      return null;
    }
  }
);

export const createShowTime = createAsyncThunk(
  "showTime/createShowTime",
  async (payload, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    let selectedDate = new Date(getState().showTime.selectedDate);
    let selectedCumRap = getState().showTime.selectedCumRap;
    let selectedMaHeThongRap = getState().showTime.selectedMaHeThongRap;
    const { hour, minute, phongChieuId, movieId, giaVe, thoiLuong } = payload;

    console.log(
      "time tao moi:  ",
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      hour,
      minute
    );
    let time = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      hour,
      minute
    ).toISOString();

    //gửi thời gian xong get về thì bị -7 vì vậy phải +7

    let timeToSendServer = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      hour + 7,
      minute
    ).toISOString();

    let dataToSend = {
      time: timeToSendServer,
      movieId,
      phongChieuId,
      giaVe,
      thoiLuong,
      maCumRap: selectedCumRap.cumRapId,
      maHeThongRap: selectedMaHeThongRap.id,
    };

    dispatch(startLoading());
    try {
      const response = await showTimeApi.postShowTime(dataToSend);
      switch (response.status) {
        case 200:
          toast.success("Tạo mới thành công");
          dispatch(closeShowTimeFormDialog());
          dispatch(stopLoading());
          return {
            newShowTime: { ...dataToSend, time: time },
            responseData: response.data,
          };
        case 204:
          toast.success("Tạo mới thành công");
          dispatch(closeShowTimeFormDialog());
          dispatch(stopLoading());
          return {
            newShowTime: { ...dataToSend, time: time },
            responseData: response.data,
          };
        case 442:
          throw { mess: "Dữ liệu đầu vào không hợp lệ" };
        case 400:
          // throw { mess: response?.data?.mess };
          let mess = response?.data?.mess;
          let start = mess.indexOf("Đụng");
          let formatMess;
          if (start >= 0) {
            formatMess = mess.slice(start, mess.length);
          } else {
            formatMess = mess;
          }
          throw { mess: formatMess };
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
export const updateShowTime = createAsyncThunk(
  "showTime/updateShowTime",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(startLoading());
    try {
      const response = await showTimeApi.postShowTime(payload);
      switch (response.status) {
        case 200:
          dispatch(stopLoading());
          return { newShowTime: payload, responseData: response.data };
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
export const deleteShowTime = createAsyncThunk(
  "showTime/deleteShowTime",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(startLoading());
    try {
      const response = await showTimeApi.deleteShowTime(payload);
      switch (response.status) {
        case 200:
          toast.success("Xóa thành công");
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

export const fetchListBookedSeats = createAsyncThunk(
  "showTime/fetchBookedSeats",
  async (payload, thunkApi) => {
    const { id } = payload;
    const { dispatch } = thunkApi;
    let params = id;

    dispatch(startLoading());
    try {
      const response = await showTimeApi.getListBookedSeats(params);

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
export const fetchListSeatsPhongChieu = createAsyncThunk(
  "showTime/fetchListSeatsPhongChieu",
  async (payload, thunkApi) => {
    const { phongChieuId } = payload;
    const { dispatch } = thunkApi;
    let params = phongChieuId;

    dispatch(startLoading());
    try {
      const response = await showTimeApi.getListSeatsPhongChieu(params);

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

export const showTimeSlice = createSlice({
  name: "showTime",
  initialState,
  reducers: {
    setSelectedCumRap: (state, action) => {
      state.selectedCumRap = action.payload;
    },
    setSelectedMaHeThongRap: (state, action) => {
      state.selectedMaHeThongRap = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setEmtyListShowTime: (state) => {
      state.listShowTime = [];
    },
    activeCreateShowTime: (state) => {
      state.isActiveCreateShowTime = true;
    },
    deactiveCreateShowTime: (state) => {
      state.isActiveCreateShowTime = false;
    },
    setSelectedShowtime: (state, action) => {
      state.selectedShowTime = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListShowTime.fulfilled, (state, action) => {
        if (action.payload === null) return;
        const { listShowTime } = action.payload;
        state.listShowTime = listShowTime;
      })
      .addCase(fetchListBookedSeats.fulfilled, (state, action) => {
        if (action.payload === null) return;
        const { listBookedSeats } = action.payload;
        state.listBookedSeats = listBookedSeats;
      })
      .addCase(fetchListSeatsPhongChieu.fulfilled, (state, action) => {
        if (action.payload === null) return;
        const { listSeatsPhongChieu } = action.payload;
        state.listSeatsPhongChieu = listSeatsPhongChieu;
      })
      .addCase(createShowTime.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { newShowTime, responseData } = action.payload;

        newShowTime = { ...newShowTime, id: responseData.id };

        let newListShowTime = state.listShowTime;
        newListShowTime.push(newShowTime);

        state.listShowTime = newListShowTime;
      })
      .addCase(updateShowTime.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { newShowTime } = action.payload;

        let newListShowTime = [...state.listShowTime];

        let index = newListShowTime.findIndex(
          (showTimeSystem) => showTimeSystem.id === newShowTime.id
        );
        newListShowTime[index] = newShowTime;

        state.listShowTime = newListShowTime;
      })
      .addCase(deleteShowTime.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { id } = action.payload;

        state.listShowTime = state.listShowTime.filter(
          (showTimeSystem) => showTimeSystem.id !== id
        );
      });
  },
});

export const {
  activeCreateShowTime,
  deactiveCreateShowTime,
  setEmtyListShowTime,
  setSelectedDate,
  setSelectedCumRap,
  setSelectedMaHeThongRap,
  setSelectedShowtime,
} = showTimeSlice.actions;

export default showTimeSlice.reducer;
