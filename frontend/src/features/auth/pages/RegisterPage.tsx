import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm';
import { RegisterData } from '../types/auth.types';
import { Card } from '../../../components/ui/Card';

interface RegisterPageProps {
  onRegister: (data: RegisterData) => void;
  loading?: boolean;
  error?: string;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({
  onRegister,
  loading,
  error,
}) => {
  return (
    <div className="auth-page">
      <Card title="Register" className="auth-card">
        <RegisterForm onSubmit={onRegister} loading={loading} error={error} />
        <div className="auth-links">
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </Card>
    </div>
  );
};


