import React from 'react';
import { Link } from 'react-router-dom';
import { ForgotPasswordForm } from '../components/ForgotPasswordForm';
import { ForgotPasswordData } from '../types/auth.types';
import { Card } from '../../../components/ui/Card';

interface ForgotPasswordPageProps {
  onSubmit: (data: ForgotPasswordData) => void;
  loading?: boolean;
  error?: string;
  success?: string;
}

export const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({
  onSubmit,
  loading,
  error,
  success,
}) => {
  return (
    <div className="auth-page">
      <Card title="Forgot Password" className="auth-card">
        <ForgotPasswordForm
          onSubmit={onSubmit}
          loading={loading}
          error={error}
          success={success}
        />
        <div className="auth-links">
          <Link to="/login">Back to Login</Link>
        </div>
      </Card>
    </div>
  );
};


