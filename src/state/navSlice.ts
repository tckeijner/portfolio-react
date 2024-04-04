import { createSlice } from '@reduxjs/toolkit';

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    navState: 0
  },
  reducers: {
    navigateByIndex: (state, action) => {
      state.navState = action.payload;
    }
  }
})

export const { navigateByIndex } = navSlice.actions;

export default navSlice.reducer;