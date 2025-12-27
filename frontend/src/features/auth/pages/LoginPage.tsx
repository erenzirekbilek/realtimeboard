import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import { LoginCredentials } from '../types/auth.types';
import { Card } from '../../../components/ui/Card';

interface LoginPageProps {
  onLogin: (credentials: LoginCredentials) => void;
  loading?: boolean;
  error?: string;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onLogin,
  loading,
  error,
}) => {
  return (
    <div className="auth-page">
      <Card title="Login" className="auth-card">
        <LoginForm onSubmit={onLogin} loading={loading} error={error} />
        <div className="auth-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <Link to="/register">Don't have an account? Register</Link>
        </div>
      </Card>
    </div>
  );
};

