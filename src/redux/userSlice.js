import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {
    fetchGetAllUser: (state, action) => ({
      ...state,
      data: [...action.payload],
    }),
  },
});
export const { fetchGetAllUser } = userSlice.actions;

export default userSlice.reducer;
