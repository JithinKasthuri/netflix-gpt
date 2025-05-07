import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    gptMovieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptMovies = movieResults;
      state.gptMovieNames = movieNames;
    },
  },
});

export const { toggleGptSearchView, addGptMovies } = gptSlice.actions;

export default gptSlice.reducer;
