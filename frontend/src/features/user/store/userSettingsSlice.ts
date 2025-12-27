import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../../../api/services/userService';
import {
  UserSettings,
  ChangePasswordData,
} from '../types/userSettings.types';

interface UserSettingsState {
  settings: UserSettings | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserSettingsState = {
  settings: null,
  loading: false,
  error: null,
};

export const fetchUserSettings = createAsyncThunk(
  'userSettings/fetch',
  async () => {
    const response = await userService.getSettings();
    return response;
  }
);

export const updateUserSettings = createAsyncThunk(
  'userSettings/update',
  async (settings: UserSettings) => {
    const response = await userService.updateSettings(settings);
    return response;
  }
);

export const changePassword = createAsyncThunk(
  'userSettings/changePassword',
  async (data: ChangePasswordData) => {
    await userService.changePassword(data);
  }
);

export const updateNotificationSettings = createAsyncThunk(
  'userSettings/updateNotifications',
  async (notifications: UserSettings['notifications']) => {
    const response = await userService.updateNotificationSettings(notifications);
    return response;
  }
);

const userSettingsSlice = createSlice({
  name: 'userSettings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.settings = action.payload;
      })
      .addCase(fetchUserSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch settings';
      })
      .addCase(updateUserSettings.fulfilled, (state, action) => {
        state.settings = action.payload;
      })
      .addCase(updateNotificationSettings.fulfilled, (state, action) => {
        if (state.settings) {
          state.settings.notifications = action.payload;
        }
      });
  },
});

export default userSettingsSlice.reducer;

