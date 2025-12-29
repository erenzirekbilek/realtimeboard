import React from 'react';
import { UserLayout } from '../../../components/layout/UserLayout';
import { SettingsForm } from '../components/SettingsForm';
import { ChangePasswordForm } from '../components/ChangePasswordForm';
import { useUserSettings } from '../hooks/useUserSettings';

export const UserSettings: React.FC = () => {
  const { settings, loading, updateSettings, changePassword } = useUserSettings();

  if (!settings) {
    return <UserLayout><div>Loading...</div></UserLayout>;
  }

  return (
    <UserLayout>
      <div className="user-settings">
        <h1>Settings</h1>
        <SettingsForm
          settings={settings}
          onSubmit={updateSettings}
          loading={loading}
        />
        <div className="password-section">
          <h2>Change Password</h2>
          <ChangePasswordForm onSubmit={changePassword} loading={loading} />
        </div>
      </div>
    </UserLayout>
  );
};


