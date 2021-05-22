import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import showTimeApi from "app/api/showTimeApi";
import { openErrorNofificationDialog } from "./dialogSlice";
import { startLoading, stopLoading } from "./loadingSlice";

const initialState = {
  listShowTime: [],
  selectedCumRap: null,
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
    const { selectedCumRap, selectedDate } = getState().showTime;
    console.log(selectedCumRap, selectedDate);
    let params = {
      cumRapId: selectedCumRap.cumRapId,
      time: selectedDate,
    };
    console.log(params);
    dispatch(startLoading());
    try {
      const response = await showTimeApi.getListShowTime(params);
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

export const createShowTime = createAsyncThunk(
  "showTime/createShowTime",
  async (payload, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    let selectedDate = new Date(getState().showTime.selectedDate);
    let selectedCumRap = getState().showTime.selectedCumRap;
    const { hour, minute, phongChieuId, movieId, giaVe, thoiLuong } = payload;
    console.log("time :", selectedDate, payload);
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
    };

    dispatch(startLoading());
    try {
      const response = await showTimeApi.postShowTime(dataToSend);
      switch (response.status) {
        case 200:
          // dispatch(notify({ message: "Đăng nhập thành công", options: { variant: 'success' } }));
          dispatch(stopLoading());
          return {
            newShowTime: { ...dataToSend, time: time },
            responseData: response.data,
          };
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
export const updateShowTime = createAsyncThunk(
  "showTime/updateShowTime",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;
    console.log(payload);
    dispatch(startLoading());
    try {
      const response = await showTimeApi.postShowTime(payload);
      switch (response.status) {
        case 200:
          dispatch(stopLoading());
          return { newShowTime: payload, responseData: response.data };
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
export const deleteShowTime = createAsyncThunk(
  "showTime/deleteShowTime",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;
    console.log(payload);
    dispatch(startLoading());
    try {
      const response = await showTimeApi.deleteShowTime(payload);
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

export const fetchListBookedSeats = createAsyncThunk(
  "showTime/fetchBookedSeats",
  async (payload, thunkApi) => {
    console.log(payload);
    const { id } = payload;
    const { dispatch } = thunkApi;
    let params = id;
    console.log(params);
    dispatch(startLoading());
    try {
      const response = await showTimeApi.getListBookedSeats(params);
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
      console.log(error);
      dispatch(stopLoading());
      return null;
    }
  }
);
export const fetchListSeatsPhongChieu = createAsyncThunk(
  "showTime/fetchListSeatsPhongChieu",
  async (payload, thunkApi) => {
    console.log(payload);
    const { phongChieuId } = payload;
    const { dispatch } = thunkApi;
    let params = phongChieuId;
    console.log(params);
    dispatch(startLoading());
    try {
      const response = await showTimeApi.getListSeatsPhongChieu(params);
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

export const showTimeSlice = createSlice({
  name: "showTime",
  initialState,
  reducers: {
    setSelectedCumRap: (state, action) => {
      state.selectedCumRap = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
      console.log("set time: ", action.payload);
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
        console.log(newListShowTime);

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
} = showTimeSlice.actions;

export default showTimeSlice.reducer;
