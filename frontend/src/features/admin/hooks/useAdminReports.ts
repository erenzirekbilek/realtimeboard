import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import {
  fetchReports,
  resolveReport,
  rejectReport,
} from '../store/adminReportsSlice';

export const useAdminReports = () => {
  const dispatch = useDispatch();
  const { reports, loading, error } = useSelector(
    (state: RootState) => state.adminReports
  );

  const loadReports = () => {
    dispatch(fetchReports() as any);
  };

  const resolveReportAction = (reportId: string) => {
    dispatch(resolveReport(reportId) as any);
  };

  const rejectReportAction = (reportId: string) => {
    dispatch(rejectReport(reportId) as any);
  };

  return {
    reports,
    loading,
    error,
    loadReports,
    resolveReport: resolveReportAction,
    rejectReport: rejectReportAction,
  };
};

