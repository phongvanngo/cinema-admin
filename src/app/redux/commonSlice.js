import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    admin_page_navbar_title:"Trang chủ"
};



export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        changeAdminNavbarTitle: (state,action) => {
            state.admin_page_navbar_title = action.payload;
        },
    },
});

export const { changeAdminNavbarTitle} = commonSlice.actions;

export default commonSlice.reducer;
