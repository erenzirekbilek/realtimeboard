import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { boardService } from '../../../api/services/boardService';
import { Board, Collaborator } from '../types/board.types';

interface BoardState {
  currentBoard: Board | null;
  collaborators: Collaborator[];
  loading: boolean;
  error: string | null;
}

const initialState: BoardState = {
  currentBoard: null,
  collaborators: [],
  loading: false,
  error: null,
};

export const fetchBoard = createAsyncThunk(
  'board/fetch',
  async ({ roomId, boardId }: { roomId: string; boardId: string }) => {
    const response = await boardService.getBoard(roomId, boardId);
    return response;
  }
);

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    updateElement: (state, action) => {
      if (state.currentBoard) {
        const element = state.currentBoard.elements.find(
          (e) => e.id === action.payload.elementId
        );
        if (element) {
          Object.assign(element, action.payload.updates);
        }
      }
    },
    addElement: (state, action) => {
      if (state.currentBoard) {
        state.currentBoard.elements.push(action.payload);
      }
    },
    removeElement: (state, action) => {
      if (state.currentBoard) {
        state.currentBoard.elements = state.currentBoard.elements.filter(
          (e) => e.id !== action.payload
        );
      }
    },
    updateCollaborators: (state, action) => {
      state.collaborators = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.currentBoard = action.payload.board;
        state.collaborators = action.payload.collaborators || [];
      })
      .addCase(fetchBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch board';
      });
  },
});

export const { updateElement, addElement, removeElement, updateCollaborators } =
  boardSlice.actions;
export default boardSlice.reducer;


