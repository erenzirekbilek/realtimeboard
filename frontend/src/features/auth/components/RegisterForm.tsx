import React, { useState } from 'react';
import { Input } from '../../../components/common/Input';
import { Button } from '../../../components/common/Button';
import { FormGroup } from '../../../components/ui/FormGroup';
import { Alert } from '../../../components/ui/Alert';
import { RegisterData } from '../types/auth.types';

interface RegisterFormProps {
  onSubmit: (data: RegisterData) => void;
  loading?: boolean;
  error?: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmit,
  loading = false,
  error,
}) => {
  const [formData, setFormData] = useState<RegisterData>({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      {error && <Alert variant="error" message={error} />}
      <FormGroup label="Name" required>
        <Input
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          placeholder="Enter your name"
          required
        />
      </FormGroup>
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
      <FormGroup label="Confirm Password" required>
        <Input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          placeholder="Confirm your password"
          required
        />
      </FormGroup>
      <Button type="submit" loading={loading} fullWidth>
        Register
      </Button>
    </form>
  );
};

