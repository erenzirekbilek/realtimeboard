import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { fetchUsers, banUser, unbanUser } from '../store/adminUsersSlice';

export const useAdminUsers = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.adminUsers
  );

  const loadUsers = () => {
    dispatch(fetchUsers() as any);
  };

  const banUserAction = (userId: string, reason: string) => {
    dispatch(banUser({ userId, reason }) as any);
  };

  const unbanUserAction = (userId: string) => {
    dispatch(unbanUser(userId) as any);
  };

  return {
    users,
    loading,
    error,
    loadUsers,
    banUser: banUserAction,
    unbanUser: unbanUserAction,
  };
};

