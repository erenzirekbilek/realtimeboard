import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { fetchUserStats } from '../store/userSlice';

export const useUserStats = () => {
  const dispatch = useDispatch();
  const { stats, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  const loadStats = () => {
    dispatch(fetchUserStats() as any);
  };

  return {
    stats,
    loading,
    error,
    loadStats,
  };
};

