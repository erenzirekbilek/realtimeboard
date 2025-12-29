import React, { useState } from 'react';
import { FormGroup } from '../../../ui/FormGroup';
import { Input } from '../../../common/Input';
import { Button } from '../../../common/Button';

interface SystemSettingsProps {
  settings: Record<string, any>;
  onSave: (settings: Record<string, any>) => void;
  loading?: boolean;
}

export const SystemSettings: React.FC<SystemSettingsProps> = ({
  settings,
  onSave,
  loading = false,
}) => {
  const [formData, setFormData] = useState(settings);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="system-settings">
      <FormGroup label="Site Name">
        <Input
          value={formData.siteName || ''}
          onChange={(e) =>
            setFormData({ ...formData, siteName: e.target.value })
          }
        />
      </FormGroup>
      <FormGroup label="Max Users Per Room">
        <Input
          type="number"
          value={formData.maxUsersPerRoom || ''}
          onChange={(e) =>
            setFormData({ ...formData, maxUsersPerRoom: e.target.value })
          }
        />
      </FormGroup>
      <Button type="submit" loading={loading}>
        Save Settings
      </Button>
    </form>
  );
};


