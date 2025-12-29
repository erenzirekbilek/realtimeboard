import { Middleware } from '@reduxjs/toolkit';

export const apiMiddleware: Middleware = (store) => (next) => (action) => {
  // Add API request/response logging or other middleware logic here
  return next(action);
};


