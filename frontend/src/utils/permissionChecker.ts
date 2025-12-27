import { ROLE_PERMISSIONS } from '../types/role.types';

export const checkPermission = (role: string, permission: string): boolean => {
  const permissions = ROLE_PERMISSIONS[role] || [];
  return permissions.includes(permission);
};

export const hasAnyPermission = (role: string, permissions: string[]): boolean => {
  return permissions.some((permission) => checkPermission(role, permission));
};

export const hasAllPermissions = (role: string, permissions: string[]): boolean => {
  return permissions.every((permission) => checkPermission(role, permission));
};

