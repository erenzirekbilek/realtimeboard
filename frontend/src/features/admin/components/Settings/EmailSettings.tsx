import React, { useState } from 'react';
import { FormGroup } from '../../../ui/FormGroup';
import { Input } from '../../../common/Input';
import { Button } from '../../../common/Button';

interface EmailSettingsProps {
  settings: Record<string, any>;
  onSave: (settings: Record<string, any>) => void;
  loading?: boolean;
}

export const EmailSettings: React.FC<EmailSettingsProps> = ({
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
    <form onSubmit={handleSubmit} className="email-settings">
      <FormGroup label="SMTP Host">
        <Input
          value={formData.smtpHost || ''}
          onChange={(e) =>
            setFormData({ ...formData, smtpHost: e.target.value })
          }
        />
      </FormGroup>
      <FormGroup label="SMTP Port">
        <Input
          type="number"
          value={formData.smtpPort || ''}
          onChange={(e) =>
            setFormData({ ...formData, smtpPort: e.target.value })
          }
        />
      </FormGroup>
      <FormGroup label="From Email">
        <Input
          type="email"
          value={formData.fromEmail || ''}
          onChange={(e) =>
            setFormData({ ...formData, fromEmail: e.target.value })
          }
        />
      </FormGroup>
      <Button type="submit" loading={loading}>
        Save Settings
      </Button>
    </form>
  );
};


