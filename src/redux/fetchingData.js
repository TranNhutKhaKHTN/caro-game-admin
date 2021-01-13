import { createSlice } from '@reduxjs/toolkit';

export const fetchingDataSlice = createSlice({
  name: 'fetchingData',
  initialState: {
    fetch: 0,
  },
  reducers: {
    fetchData: (state) => ({
      fetch: state.fetch + 1,
    }),
  },
});
export const { fetchData } = fetchingDataSlice.actions;

export default fetchingDataSlice.reducer;
