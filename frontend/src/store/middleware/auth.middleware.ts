import { Middleware } from '@reduxjs/toolkit';
import { logout } from '../../features/auth/store/authSlice';

export const authMiddleware: Middleware = (store) => (next) => (action) => {
  // Handle token expiration or auth errors
  if (action.type.endsWith('/rejected')) {
    const error = action.error?.message || '';
    if (error.includes('401') || error.includes('Unauthorized')) {
      store.dispatch(logout());
    }
  }

  return next(action);
};


