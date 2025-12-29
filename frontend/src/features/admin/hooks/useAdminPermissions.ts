import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { checkPermission } from '../../../utils/permissionChecker';

export const useAdminPermissions = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const hasPermission = (permission: string) => {
    if (!user) return false;
    return checkPermission(user.role, permission);
  };

  const isAdmin = user?.role === 'admin';

  return {
    hasPermission,
    isAdmin,
  };
};


