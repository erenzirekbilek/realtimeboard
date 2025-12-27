import { Role } from '../types/role.types';

export const isAdmin = (role: Role | string): boolean => {
  return role === 'admin';
};

export const isModerator = (role: Role | string): boolean => {
  return role === 'moderator' || role === 'admin';
};

export const isUser = (role: Role | string): boolean => {
  return ['user', 'moderator', 'admin'].includes(role);
};

export const hasRole = (userRole: Role | string, requiredRole: Role | string): boolean => {
  const roleHierarchy: Record<string, number> = {
    user: 1,
    moderator: 2,
    admin: 3,
  };

  return (roleHierarchy[userRole] || 0) >= (roleHierarchy[requiredRole] || 0);
};

