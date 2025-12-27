import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { adminService } from '../../../api/services/adminService';
import { AdminUser } from '../types/adminUser.types';

interface AdminUsersState {
  users: AdminUser[];
  loading: boolean;
  error: string | null;
}

const initialState: AdminUsersState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk('adminUsers/fetch', async () => {
  const response = await adminService.getUsers();
  return response;
});

export const banUser = createAsyncThunk(
  'adminUsers/ban',
  async ({ userId, reason }: { userId: string; reason: string }) => {
    await adminService.banUser(userId, reason);
    return userId;
  }
);

export const unbanUser = createAsyncThunk(
  'adminUsers/unban',
  async (userId: string) => {
    await adminService.unbanUser(userId);
    return userId;
  }
);

const adminUsersSlice = createSlice({
  name: 'adminUsers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      })
      .addCase(banUser.fulfilled, (state, action) => {
        const user = state.users.find((u) => u.id === action.payload);
        if (user) {
          user.isBanned = true;
        }
      })
      .addCase(unbanUser.fulfilled, (state, action) => {
        const user = state.users.find((u) => u.id === action.payload);
        if (user) {
          user.isBanned = false;
        }
      });
  },
});

export default adminUsersSlice.reducer;

