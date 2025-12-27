import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { fetchLogs } from '../store/adminLogsSlice';

export const useAdminLogs = () => {
  const dispatch = useDispatch();
  const { logs, loading, error } = useSelector(
    (state: RootState) => state.adminLogs
  );

  const loadLogs = () => {
    dispatch(fetchLogs() as any);
  };

  return {
    logs,
    loading,
    error,
    loadLogs,
  };
};

