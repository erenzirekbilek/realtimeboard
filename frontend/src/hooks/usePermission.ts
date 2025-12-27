import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { checkPermission } from '../utils/permissionChecker';

export const usePermission = (permission: string): boolean => {
  const { user } = useSelector((state: RootState) => state.auth);

  if (!user) return false;

  return checkPermission(user.role, permission);
};

