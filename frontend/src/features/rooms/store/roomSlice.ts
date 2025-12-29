import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { roomService } from '../../../api/services/roomService';
import { Room } from '../types/room.types';

interface RoomState {
  rooms: Room[];
  currentRoom: Room | null;
  loading: boolean;
  error: string | null;
}

const initialState: RoomState = {
  rooms: [],
  currentRoom: null,
  loading: false,
  error: null,
};

export const fetchRooms = createAsyncThunk('rooms/fetch', async () => {
  const response = await roomService.getRooms();
  return response;
});

export const fetchRoom = createAsyncThunk(
  'rooms/fetchOne',
  async (roomId: string) => {
    const response = await roomService.getRoom(roomId);
    return response;
  }
);

export const createRoom = createAsyncThunk(
  'rooms/create',
  async (data: { name: string; description?: string; isPublic: boolean }) => {
    const response = await roomService.createRoom(data);
    return response;
  }
);

const roomSlice = createSlice({
  name: 'rooms',
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
      .addCase(fetchRoom.fulfilled, (state, action) => {
        state.currentRoom = action.payload;
      })
      .addCase(createRoom.fulfilled, (state, action) => {
        state.rooms.push(action.payload);
      });
  },
});

export default roomSlice.reducer;


