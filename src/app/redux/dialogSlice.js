import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theaterSystemFormDialog: {
    isOpen: false,
    defaultData: null,
  },
  movieFormDialog: {
    isOpen: false,
    defaultData: null,
  },
  cumRapFormDialog: {
    isOpen: false,
    defaultData: null,
  },
  phongChieuFormDialog: {
    isOpen: false,
    defaultData: null,
  },
  errorNotificationDialog: {
    isOpen: false,
    defaultData: { title: "" },
  },
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openTheaterSystemFormDialog: (state, action) => {
      state.theaterSystemFormDialog.defaultData = action.payload;
      state.theaterSystemFormDialog.isOpen = true;
    },
    closeTheaterSystemFormDialog: (state) => {
      state.theaterSystemFormDialog.isOpen = false;
      state.theaterSystemFormDialog.defaultData = null;
    },
    openMovieFormDialog: (state, action) => {
      state.movieFormDialog.defaultData = action.payload;
      state.movieFormDialog.isOpen = true;
    },
    closeMovieFormDialog: (state) => {
      state.movieFormDialog.isOpen = false;
      state.movieFormDialog.defaultData = null;
    },
    openCumRapFormDialog: (state, action) => {
      state.cumRapFormDialog.defaultData = action.payload;
      state.cumRapFormDialog.isOpen = true;
    },
    closeCumRapFormDialog: (state) => {
      state.cumRapFormDialog.isOpen = false;
      state.cumRapFormDialog.defaultData = null;
    },
    openPhongChieuFormDialog: (state, action) => {
      state.cumRapFormDialog.defaultData = action.payload;
      state.cumRapFormDialog.isOpen = true;
    },
    closePhongChieuFormDialog: (state) => {
      state.cumRapFormDialog.isOpen = false;
      state.cumRapFormDialog.defaultData = null;
    },
    openErrorNofificationDialog: (state, action) => {
      state.errorNotificationDialog.defaultData = action.payload;
      state.errorNotificationDialog.isOpen = true;
    },
    closeErrorNotificationDialog: (state) => {
      state.errorNotificationDialog.isOpen = false;
      state.errorNotificationDialog.defaultData = { title: "" };
    },
  },
});

export const {
  openErrorNofificationDialog,
  closeErrorNotificationDialog,
  openTheaterSystemFormDialog,
  closeTheaterSystemFormDialog,
  openMovieFormDialog,
  closeMovieFormDialog,
  openCumRapFormDialog,
  closeCumRapFormDialog,
  openPhongChieuFormDialog,
  closePhongChieuFormDialog,
} = dialogSlice.actions;

export default dialogSlice.reducer;
