import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import {
  fetchUserSettings,
  updateUserSettings,
  changePassword,
  updateNotificationSettings,
} from '../store/userSettingsSlice';
import {
  UserSettings,
  ChangePasswordData,
} from '../types/userSettings.types';

export const useUserSettings = () => {
  const dispatch = useDispatch();
  const { settings, loading, error } = useSelector(
    (state: RootState) => state.userSettings
  );

  const loadSettings = () => {
    dispatch(fetchUserSettings() as any);
  };

  const updateSettings = (newSettings: UserSettings) => {
    dispatch(updateUserSettings(newSettings) as any);
  };

  const changePasswordAction = (data: ChangePasswordData) => {
    dispatch(changePassword(data) as any);
  };

  const updateNotificationSettingsAction = (
    notificationSettings: UserSettings['notifications']
  ) => {
    dispatch(updateNotificationSettings(notificationSettings) as any);
  };

  return {
    settings,
    loading,
    error,
    loadSettings,
    updateSettings,
    changePassword: changePasswordAction,
    updateNotificationSettings: updateNotificationSettingsAction,
  };
};


