import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  indexImage: 1,
  carrousel: false,
  shownImage: "",
};

export const carrouselSlice = createSlice({
  name: "carrousel",
  initialState,
  reducers: {
    nextImage: (state) => {
      state.indexImage <= 5 ? (state.indexImage += 1) : (state.indexImage = 1);
    },
    prevImage: (state) => {
      state.indexImage >= 0 ? (state.indexImage -= 1) : (state.indexImage = 4);
    },
    selectImage: (state, actions) => {
      state.indexImage = actions.payload;
    },
    openCarrousel: (state) => {
      state.carrousel = true;
    },
    closedCarrousel: (state) => {
      state.carrousel = false;
    },
  },
});

export const {
  nextImage,
  prevImage,
  selectImage,
  openCarrousel,
  closedCarrousel,
} = carrouselSlice.actions;

export default carrouselSlice.reducer;
