import React, { useState } from 'react';
import { FormGroup } from '../../../components/ui/FormGroup';
import { Button } from '../../../components/common/Button';
import { UserSettings } from '../types/userSettings.types';

interface NotificationSettingsProps {
  settings: UserSettings['notifications'];
  onSubmit: (settings: UserSettings['notifications']) => void;
  loading?: boolean;
}

export const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  settings,
  onSubmit,
  loading = false,
}) => {
  const [formData, setFormData] = useState(settings);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="notification-settings">
      <FormGroup>
        <label>
          <input
            type="checkbox"
            checked={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.checked })
            }
          />
          Email Notifications
        </label>
      </FormGroup>
      <FormGroup>
        <label>
          <input
            type="checkbox"
            checked={formData.push}
            onChange={(e) =>
              setFormData({ ...formData, push: e.target.checked })
            }
          />
          Push Notifications
        </label>
      </FormGroup>
      <FormGroup>
        <label>
          <input
            type="checkbox"
            checked={formData.roomInvites}
            onChange={(e) =>
              setFormData({ ...formData, roomInvites: e.target.checked })
            }
          />
          Room Invites
        </label>
      </FormGroup>
      <FormGroup>
        <label>
          <input
            type="checkbox"
            checked={formData.boardUpdates}
            onChange={(e) =>
              setFormData({ ...formData, boardUpdates: e.target.checked })
            }
          />
          Board Updates
        </label>
      </FormGroup>
      <Button type="submit" loading={loading}>
        Save Notification Settings
      </Button>
    </form>
  );
};


