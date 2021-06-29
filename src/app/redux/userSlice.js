import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminLogOut } from "./adminAuthSlice";
import { toast } from "react-toastify";
import userApi from "app/api/userApi";
import { startLoading, stopLoading } from "./loadingSlice";

const initialState = {
  listUser: [],
};

export const fetchListUser = createAsyncThunk(
  "user/fetchListUser",
  async (payload, thunkApi) => {
    if (payload !== null) {
    }
    const { dispatch } = thunkApi;
    dispatch(startLoading());
    try {
      const response = await userApi.getListUser();
      console.log("fetchListUSer, response", response);
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
export const createUser = createAsyncThunk(
  "user/createUser",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(startLoading());
    try {
      const response = await userApi.postUser(payload);
      switch (response.status) {
        case 200:
          // dispatch(notify({ message: "Đăng nhập thành công", options: { variant: 'success' } }));
          dispatch(stopLoading());
          return { newUser: payload, responseData: response.data };
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
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(startLoading());
    try {
      const response = await userApi.postUser(payload);
      switch (response.status) {
        case 200:
          dispatch(stopLoading());
          return { newUser: payload, responseData: response.data };
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
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (payload, thunkApi) => {
    const { dispatch } = thunkApi;

    dispatch(startLoading());
    try {
      const response = await userApi.deleteUser(payload);
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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListUser.fulfilled, (state, action) => {
        if (action.payload === null) return;
        const { listUser } = action.payload;
        state.listUser = listUser;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { newUser, responseData } = action.payload;

        newUser = { ...newUser, id: responseData.id };

        let newListUser = state.listUser;
        newListUser.push(newUser);

        state.listUser = newListUser;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { newUser } = action.payload;

        let newListUser = [...state.listUser];

        let index = newListUser.findIndex(
          (userSystem) => userSystem.id === newUser.id
        );
        newListUser[index] = newUser;

        state.listUser = newListUser;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        if (action.payload === null) return;
        let { id } = action.payload;

        state.listUser = state.listUser.filter(
          (userSystem) => userSystem.id !== id
        );
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
