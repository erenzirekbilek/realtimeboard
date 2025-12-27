import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { adminService } from '../../../api/services/adminService';
import { AdminRoom } from '../types/adminRoom.types';

interface AdminRoomsState {
  rooms: AdminRoom[];
  loading: boolean;
  error: string | null;
}

const initialState: AdminRoomsState = {
  rooms: [],
  loading: false,
  error: null,
};

export const fetchRooms = createAsyncThunk('adminRooms/fetch', async () => {
  const response = await adminService.getRooms();
  return response;
});

export const deleteRoom = createAsyncThunk(
  'adminRooms/delete',
  async (roomId: string) => {
    await adminService.deleteRoom(roomId);
    return roomId;
  }
);

const adminRoomsSlice = createSlice({
  name: 'adminRooms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.loading = false;
        state.rooms = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch rooms';
      })
      .addCase(deleteRoom.fulfilled, (state, action) => {
        state.rooms = state.rooms.filter((r) => r.id !== action.payload);
      });
  },
});

export default adminRoomsSlice.reducer;

