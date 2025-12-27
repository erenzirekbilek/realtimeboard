import React, { useState } from 'react';
import { Input } from '../../../components/common/Input';
import { Button } from '../../../components/common/Button';
import { FormGroup } from '../../../components/ui/FormGroup';
import { Alert } from '../../../components/ui/Alert';
import { ForgotPasswordData } from '../types/auth.types';

interface ForgotPasswordFormProps {
  onSubmit: (data: ForgotPasswordData) => void;
  loading?: boolean;
  error?: string;
  success?: string;
}

export const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  onSubmit,
  loading = false,
  error,
  success,
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email });
  };

  return (
    <form onSubmit={handleSubmit} className="forgot-password-form">
      {error && <Alert variant="error" message={error} />}
      {success && <Alert variant="success" message={success} />}
      <FormGroup label="Email" required>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </FormGroup>
      <Button type="submit" loading={loading} fullWidth>
        Send Reset Link
      </Button>
    </form>
  );
};

