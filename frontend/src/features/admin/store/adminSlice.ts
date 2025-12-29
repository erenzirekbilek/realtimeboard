import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { adminService } from '../../../api/services/adminService';
import { AdminStats, SystemHealth } from '../types/admin.types';

interface AdminState {
  stats: AdminStats | null;
  health: SystemHealth | null;
  loading: boolean;
  error: string | null;
}

const initialState: AdminState = {
  stats: null,
  health: null,
  loading: false,
  error: null,
};

export const fetchAdminStats = createAsyncThunk(
  'admin/fetchStats',
  async () => {
    const response = await adminService.getStats();
    return response;
  }
);

export const fetchSystemHealth = createAsyncThunk(
  'admin/fetchHealth',
  async () => {
    const response = await adminService.getSystemHealth();
    return response;
  }
);

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminStats.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload;
      })
      .addCase(fetchAdminStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch stats';
      })
      .addCase(fetchSystemHealth.fulfilled, (state, action) => {
        state.health = action.payload;
      });
  },
});

export default adminSlice.reducer;


