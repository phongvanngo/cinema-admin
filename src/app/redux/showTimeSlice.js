import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import showTimeApi from "app/api/showTimeApi";
import { openErrorNofificationDialog } from "./dialogSlice";
import { startLoading, stopLoading } from "./loadingSlice";

const initialState = {
  listShowTime: [],
  selectedCumRap: null,
  selectedDate: new Date().toString(),
  isActiveCreateShowTime: false,
};

export const fetchListShowTime = createAsyncThunk(
  "showTime/fetchListShowTime",
  async (payload, thunkApi) => {
    if (payload) {
    }
    const { dispatch, getState } = thunkApi;
    const { selectedCumRap, selectedDate } = getState().showTime;
    console.log(selectedCumRap, selectedDate);
    let params = { cumRapId: selectedCumRap.cumRapId, time: selectedDate };
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
    const { hour, minute, phongChieuId, movieId } = payload;
    console.log(selectedDate, payload);
    console.log(
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
    ).toString();

    let dataToSend = { time: time, movieId, phongChieuId };

    dispatch(startLoading());
    try {
      const response = await showTimeApi.postShowTime(dataToSend);
      switch (response.status) {
        case 200:
          // dispatch(notify({ message: "Đăng nhập thành công", options: { variant: 'success' } }));
          dispatch(stopLoading());
          return { newShowTime: dataToSend, responseData: response.data };
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

export const showTimeSlice = createSlice({
  name: "showTime",
  initialState,
  reducers: {
    setSelectedCumRap: (state, action) => {
      state.selectedCumRap = action.payload;
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListShowTime.fulfilled, (state, action) => {
        if (action.payload === null) return;
        const { listShowTime } = action.payload;
        state.listShowTime = listShowTime;
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
