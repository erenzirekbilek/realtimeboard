import { createSlice } from '@reduxjs/toolkit';

interface DrawingState {
  isDrawing: boolean;
  currentPath: Array<{ x: number; y: number }>;
  color: string;
  strokeWidth: number;
}

const initialState: DrawingState = {
  isDrawing: false,
  currentPath: [],
  color: '#000000',
  strokeWidth: 2,
};

const drawingSlice = createSlice({
  name: 'drawing',
  initialState,
  reducers: {
    startDrawing: (state, action) => {
      state.isDrawing = true;
      state.currentPath = [action.payload];
    },
    continueDrawing: (state, action) => {
      if (state.isDrawing) {
        state.currentPath.push(action.payload);
      }
    },
    stopDrawing: (state) => {
      state.isDrawing = false;
      state.currentPath = [];
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setStrokeWidth: (state, action) => {
      state.strokeWidth = action.payload;
    },
  },
});

export const {
  startDrawing,
  continueDrawing,
  stopDrawing,
  setColor,
  setStrokeWidth,
} = drawingSlice.actions;
export default drawingSlice.reducer;

