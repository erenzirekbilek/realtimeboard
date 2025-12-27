export const ADMIN_PERMISSIONS = {
  MANAGE_USERS: 'manage_users',
  MANAGE_ROOMS: 'manage_rooms',
  MANAGE_REPORTS: 'manage_reports',
  VIEW_LOGS: 'view_logs',
  MANAGE_SETTINGS: 'manage_settings',
  VIEW_ANALYTICS: 'view_analytics',
} as const;

export const hasAdminPermission = (
  role: string,
  permission: string
): boolean => {
  if (role !== 'admin') return false;
  return Object.values(ADMIN_PERMISSIONS).includes(permission as any);
};

