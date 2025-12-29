import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/store/authSlice';
import userReducer from '../features/user/store/userSlice';
import userSettingsReducer from '../features/user/store/userSettingsSlice';
import adminReducer from '../features/admin/store/adminSlice';
import adminUsersReducer from '../features/admin/store/adminUsersSlice';
import adminRoomsReducer from '../features/admin/store/adminRoomsSlice';
import adminReportsReducer from '../features/admin/store/adminReportsSlice';
import adminLogsReducer from '../features/admin/store/adminLogsSlice';
import roomReducer from '../features/rooms/store/roomSlice';
import boardReducer from '../features/board/store/boardSlice';
import drawingReducer from '../features/board/store/drawingSlice';
import notificationReducer from '../features/notifications/store/notificationSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  userSettings: userSettingsReducer,
  admin: adminReducer,
  adminUsers: adminUsersReducer,
  adminRooms: adminRoomsReducer,
  adminReports: adminReportsReducer,
  adminLogs: adminLogsReducer,
  rooms: roomReducer,
  board: boardReducer,
  drawing: drawingReducer,
  notifications: notificationReducer,
});


