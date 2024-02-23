import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    planetUrl: "https://swapi.dev/api/planets/",
    planets: null,

    peopleUrl: "https://swapi.dev/api/people/",
    people: null,
  },
  reducers: {
    setPlanetUrl(state, action) {
      state.planetUrl = action.payload;
    },
    setPlanets(state, action) {
      state.planets = action.payload;
    },
    setPeopleUrl(state, action) {
      state.peopleUrl = action.payload;
    },
    setPeople(state, action) {
      state.people = action.payload;
    },
  },
});

export const { setPlanetUrl, setPlanets, setPeople, setPeopleUrl } =
  homeSlice.actions;
export default homeSlice.reducer;
