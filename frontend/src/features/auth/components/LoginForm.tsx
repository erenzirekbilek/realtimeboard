import React, { useState } from 'react';
import { Input } from '../../../components/common/Input';
import { Button } from '../../../components/common/Button';
import { FormGroup } from '../../../components/ui/FormGroup';
import { Alert } from '../../../components/ui/Alert';
import { LoginCredentials } from '../types/auth.types';

interface LoginFormProps {
  onSubmit: (credentials: LoginCredentials) => void;
  loading?: boolean;
  error?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  loading = false,
  error,
}) => {
  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {error && <Alert variant="error" message={error} />}
      <FormGroup label="Email" required>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          placeholder="Enter your email"
          required
        />
      </FormGroup>
      <FormGroup label="Password" required>
        <Input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Enter your password"
          required
        />
      </FormGroup>
      <Button type="submit" loading={loading} fullWidth>
        Login
      </Button>
    </form>
  );
};


