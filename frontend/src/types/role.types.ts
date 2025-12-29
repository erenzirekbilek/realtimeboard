export type Role = 'user' | 'admin' | 'moderator';

export interface RolePermissions {
  [role: string]: string[];
}

export const ROLE_PERMISSIONS: RolePermissions = {
  user: ['view_rooms', 'create_rooms', 'join_rooms'],
  moderator: ['view_rooms', 'create_rooms', 'join_rooms', 'moderate_rooms'],
  admin: [
    'view_rooms',
    'create_rooms',
    'join_rooms',
    'moderate_rooms',
    'manage_users',
    'manage_rooms',
    'view_logs',
    'manage_settings',
  ],
};


