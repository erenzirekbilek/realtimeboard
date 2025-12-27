export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  USER_DASHBOARD: '/user/dashboard',
  USER_PROFILE: '/user/profile',
  USER_SETTINGS: '/user/settings',
  USER_ROOMS: '/user/rooms',
  USER_NOTIFICATIONS: '/user/notifications',
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_USERS: '/admin/users',
  ADMIN_ROOMS: '/admin/rooms',
  ADMIN_REPORTS: '/admin/reports',
  ADMIN_LOGS: '/admin/logs',
  ADMIN_SETTINGS: '/admin/settings',
  ADMIN_ANALYTICS: '/admin/analytics',
  ROOMS: '/rooms',
  ROOM_DETAILS: '/rooms/:id',
  BOARD: '/rooms/:roomId/boards/:boardId',
};

export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  THEME: 'theme',
};

