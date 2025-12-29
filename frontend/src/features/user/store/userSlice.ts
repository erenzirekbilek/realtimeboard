import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../../../api/services/userService';
import { UserProfile, UserStats } from '../types/user.types';

interface UserState {
  profile: UserProfile | null;
  stats: UserStats | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  profile: null,
  stats: null,
  loading: false,
  error: null,
};

export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async () => {
    const response = await userService.getProfile();
    return response;
  }
);

export const fetchUserStats = createAsyncThunk('user/fetchStats', async () => {
  const response = await userService.getStats();
  return response;
});

export const updateUserAvatar = createAsyncThunk(
  'user/updateAvatar',
  async (file: File) => {
    const response = await userService.updateAvatar(file);
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch profile';
      })
      .addCase(fetchUserStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserStats.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload;
      })
      .addCase(fetchUserStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch stats';
      })
      .addCase(updateUserAvatar.fulfilled, (state, action) => {
        if (state.profile) {
          state.profile.avatar = action.payload.avatar;
        }
      });
  },
});

export default userSlice.reducer;


