import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  indexCarrouselImage: undefined,
};

export const carrouselSlice = createSlice({
  name: "carrousel",
  initialState,
  reducers: {
    nextImage: (state) => {
      state.indexCarrouselImage <= 5
        ? (state.indexCarrouselImage += 1)
        : (state.indexCarrouselImage = 1);
    },
    prevImage: (state) => {
      state.indexCarrouselImage >= 0
        ? (state.indexCarrouselImage -= 1)
        : (state.indexCarrouselImage = 4);
    },
    imageSelected: (state, actions) => {
      state.indexCarrouselImage = actions.payload;
    },
    initializingImage: (state, actions) => {
      state.indexCarrouselImage = actions.payload;
    },
  },
});

export const { nextImage, prevImage, imageSelected, initializingImage } =
  carrouselSlice.actions;

export default carrouselSlice.reducer;
