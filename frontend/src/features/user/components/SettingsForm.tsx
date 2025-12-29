import React, { useState } from 'react';
import { Input } from '../../../components/common/Input';
import { Button } from '../../../components/common/Button';
import { FormGroup } from '../../../components/ui/FormGroup';
import { UserSettings } from '../types/userSettings.types';

interface SettingsFormProps {
  settings: UserSettings;
  onSubmit: (settings: UserSettings) => void;
  loading?: boolean;
}

export const SettingsForm: React.FC<SettingsFormProps> = ({
  settings,
  onSubmit,
  loading = false,
}) => {
  const [formData, setFormData] = useState<UserSettings>(settings);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="settings-form">
      <div className="settings-section">
        <h3>Notifications</h3>
        <FormGroup>
          <label>
            <input
              type="checkbox"
              checked={formData.notifications.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  notifications: {
                    ...formData.notifications,
                    email: e.target.checked,
                  },
                })
              }
            />
            Email Notifications
          </label>
        </FormGroup>
        <FormGroup>
          <label>
            <input
              type="checkbox"
              checked={formData.notifications.push}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  notifications: {
                    ...formData.notifications,
                    push: e.target.checked,
                  },
                })
              }
            />
            Push Notifications
          </label>
        </FormGroup>
      </div>

      <div className="settings-section">
        <h3>Privacy</h3>
        <FormGroup label="Profile Visibility">
          <select
            value={formData.privacy.profileVisibility}
            onChange={(e) =>
              setFormData({
                ...formData,
                privacy: {
                  ...formData.privacy,
                  profileVisibility: e.target.value as any,
                },
              })
            }
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="friends">Friends Only</option>
          </select>
        </FormGroup>
      </div>

      <div className="settings-section">
        <h3>Appearance</h3>
        <FormGroup label="Theme">
          <select
            value={formData.appearance.theme}
            onChange={(e) =>
              setFormData({
                ...formData,
                appearance: {
                  ...formData.appearance,
                  theme: e.target.value as any,
                },
              })
            }
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto</option>
          </select>
        </FormGroup>
      </div>

      <Button type="submit" loading={loading}>
        Save Settings
      </Button>
    </form>
  );
};


