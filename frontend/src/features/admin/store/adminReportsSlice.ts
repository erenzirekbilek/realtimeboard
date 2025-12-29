import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { adminService } from '../../../api/services/adminService';
import { Report } from '../types/adminReport.types';

interface AdminReportsState {
  reports: Report[];
  loading: boolean;
  error: string | null;
}

const initialState: AdminReportsState = {
  reports: [],
  loading: false,
  error: null,
};

export const fetchReports = createAsyncThunk('adminReports/fetch', async () => {
  const response = await adminService.getReports();
  return response;
});

export const resolveReport = createAsyncThunk(
  'adminReports/resolve',
  async (reportId: string) => {
    await adminService.resolveReport(reportId);
    return reportId;
  }
);

export const rejectReport = createAsyncThunk(
  'adminReports/reject',
  async (reportId: string) => {
    await adminService.rejectReport(reportId);
    return reportId;
  }
);

const adminReportsSlice = createSlice({
  name: 'adminReports',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReports.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReports.fulfilled, (state, action) => {
        state.loading = false;
        state.reports = action.payload;
      })
      .addCase(fetchReports.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch reports';
      })
      .addCase(resolveReport.fulfilled, (state, action) => {
        const report = state.reports.find((r) => r.id === action.payload);
        if (report) {
          report.status = 'resolved';
        }
      })
      .addCase(rejectReport.fulfilled, (state, action) => {
        const report = state.reports.find((r) => r.id === action.payload);
        if (report) {
          report.status = 'rejected';
        }
      });
  },
});

export default adminReportsSlice.reducer;


