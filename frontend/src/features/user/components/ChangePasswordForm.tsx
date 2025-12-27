import React, { useState } from 'react';
import { Input } from '../../../components/common/Input';
import { Button } from '../../../components/common/Button';
import { FormGroup } from '../../../components/ui/FormGroup';
import { Alert } from '../../../components/ui/Alert';
import { ChangePasswordData } from '../types/userSettings.types';

interface ChangePasswordFormProps {
  onSubmit: (data: ChangePasswordData) => void;
  loading?: boolean;
  error?: string;
  success?: string;
}

export const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
  onSubmit,
  loading = false,
  error,
  success,
}) => {
  const [formData, setFormData] = useState<ChangePasswordData>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="change-password-form">
      {error && <Alert variant="error" message={error} />}
      {success && <Alert variant="success" message={success} />}
      <FormGroup label="Current Password" required>
        <Input
          type="password"
          value={formData.currentPassword}
          onChange={(e) =>
            setFormData({ ...formData, currentPassword: e.target.value })
          }
          required
        />
      </FormGroup>
      <FormGroup label="New Password" required>
        <Input
          type="password"
          value={formData.newPassword}
          onChange={(e) =>
            setFormData({ ...formData, newPassword: e.target.value })
          }
          required
        />
      </FormGroup>
      <FormGroup label="Confirm New Password" required>
        <Input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          required
        />
      </FormGroup>
      <Button type="submit" loading={loading}>
        Change Password
      </Button>
    </form>
  );
};

