import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    peopleData: null,
  },
  reducers: {
    setPeopleData(state, action) {
      state.peopleData = action.payload;
    },
  },
});

export const { setPeopleData } = homeSlice.actions;
export default homeSlice.reducer;
