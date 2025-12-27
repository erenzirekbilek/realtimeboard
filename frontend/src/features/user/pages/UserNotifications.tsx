import React from 'react';
import { UserLayout } from '../../../components/layout/UserLayout';
import { NotificationSettings } from '../components/NotificationSettings';
import { useUserSettings } from '../hooks/useUserSettings';

export const UserNotifications: React.FC = () => {
  const { settings, loading, updateNotificationSettings } = useUserSettings();

  if (!settings) {
    return <UserLayout><div>Loading...</div></UserLayout>;
  }

  return (
    <UserLayout>
      <div className="user-notifications">
        <h1>Notifications</h1>
        <NotificationSettings
          settings={settings.notifications}
          onSubmit={updateNotificationSettings}
          loading={loading}
        />
      </div>
    </UserLayout>
  );
};

