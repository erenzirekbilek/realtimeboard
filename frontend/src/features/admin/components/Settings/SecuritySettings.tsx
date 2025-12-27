import React, { useState } from 'react';
import { FormGroup } from '../../../ui/FormGroup';
import { Input } from '../../../common/Input';
import { Button } from '../../../common/Button';

interface SecuritySettingsProps {
  settings: Record<string, any>;
  onSave: (settings: Record<string, any>) => void;
  loading?: boolean;
}

export const SecuritySettings: React.FC<SecuritySettingsProps> = ({
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
    <form onSubmit={handleSubmit} className="security-settings">
      <FormGroup>
        <label>
          <input
            type="checkbox"
            checked={formData.requireEmailVerification || false}
            onChange={(e) =>
              setFormData({
                ...formData,
                requireEmailVerification: e.target.checked,
              })
            }
          />
          Require Email Verification
        </label>
      </FormGroup>
      <FormGroup>
        <label>
          <input
            type="checkbox"
            checked={formData.enable2FA || false}
            onChange={(e) =>
              setFormData({ ...formData, enable2FA: e.target.checked })
            }
          />
          Enable Two-Factor Authentication
        </label>
      </FormGroup>
      <Button type="submit" loading={loading}>
        Save Settings
      </Button>
    </form>
  );
};

