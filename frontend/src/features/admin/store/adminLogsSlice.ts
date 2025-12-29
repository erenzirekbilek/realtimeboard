import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { adminService } from '../../../api/services/adminService';
import { Log } from '../types/adminLog.types';

interface AdminLogsState {
  logs: Log[];
  loading: boolean;
  error: string | null;
}

const initialState: AdminLogsState = {
  logs: [],
  loading: false,
  error: null,
};

export const fetchLogs = createAsyncThunk('adminLogs/fetch', async () => {
  const response = await adminService.getLogs();
  return response;
});

const adminLogsSlice = createSlice({
  name: 'adminLogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLogs.fulfilled, (state, action) => {
        state.loading = false;
        state.logs = action.payload;
      })
      .addCase(fetchLogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch logs';
      });
  },
});

export default adminLogsSlice.reducer;


