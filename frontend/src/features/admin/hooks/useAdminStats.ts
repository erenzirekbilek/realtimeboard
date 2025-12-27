import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { fetchAdminStats, fetchSystemHealth } from '../store/adminSlice';

export const useAdminStats = () => {
  const dispatch = useDispatch();
  const { stats, health, loading, error } = useSelector(
    (state: RootState) => state.admin
  );

  const loadStats = () => {
    dispatch(fetchAdminStats() as any);
  };

  const loadHealth = () => {
    dispatch(fetchSystemHealth() as any);
  };

  return {
    stats,
    health,
    loading,
    error,
    loadStats,
    loadHealth,
  };
};

