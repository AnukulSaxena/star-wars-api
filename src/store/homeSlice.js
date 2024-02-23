import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    url: "https://swapi.dev/api/planets/",
    planets: null
  },
  reducers: {
    setUrl(state, action) {
      state.url = action.payload;
    },
    setPlanets(state,action){
        state.planets = action.payload;
    }
  },
})

export const { setUrl, setPlanets } = homeSlice.actions
export default homeSlice.reducer