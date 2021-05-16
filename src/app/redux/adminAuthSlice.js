import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import adminAuthApi from 'app/api/adminAuthApi';
import { startLoading, stopLoading } from './loadingSlice';

const initialState = {
    isLoggedIn: false,
};

export const adminLoginRequest = createAsyncThunk(
    'adminAuth/loginRequestStatus',
    async (loginInfo, thunkApi) => {
        const { dispatch } = thunkApi;
        dispatch(startLoading());
        try {
            const response = await adminAuthApi.sendLoginInfo(loginInfo);
            switch (response.status) {
                case 200:
                    // dispatch(notify({ message: "Đăng nhập thành công", options: { variant: 'success' } }));
                    dispatch(stopLoading());
                    return response.data;
                case 401:
                    throw new Error("Sai tên đăng nhập hoặc mật khẩu");
                case 400:
                    throw new Error("Chưa nhập tên đăng nhập và mật khẩu");
                default:
                    throw new Error("Failed");
            }
        } catch (error) {
            // dispatch(notify({ message: `${error}`, options: { variant: 'error' } }));
            dispatch(stopLoading());
            return null;
        }
    }
)

export const adminAuthSlice = createSlice({
    name: 'adminAuth',
    initialState,
    reducers: {
        adminLoginAgain: (state) => {
            state.isLoggedIn = true;
        },
        adminLogOut: (state) => {
            window.localStorage.removeItem('id_token');
            state.isLoggedIn = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(adminLoginRequest.fulfilled, (state, action) => {
                const response_data = action.payload;
                if (response_data === null) return;

                const { token } = response_data;
                window.localStorage.setItem('id_token', token);
                state.isLoggedIn = true;
            });

    },
});

export const { adminLogOut, adminLoginAgain } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
