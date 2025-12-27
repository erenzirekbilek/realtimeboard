import React from 'react';
import { Modal } from '../../../common/Modal';
import { AdminUser } from '../../types/adminUser.types';

interface UserDetailModalProps {
  user: AdminUser | null;
  isOpen: boolean;
  onClose: () => void;
}

export const UserDetailModal: React.FC<UserDetailModalProps> = ({
  user,
  isOpen,
  onClose,
}) => {
  if (!user) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="User Details">
      <div className="user-detail">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Status:</strong> {user.isBanned ? 'Banned' : 'Active'}</p>
        <p><strong>Login Count:</strong> {user.loginCount}</p>
        {user.lastLogin && (
          <p><strong>Last Login:</strong> {new Date(user.lastLogin).toLocaleString()}</p>
        )}
      </div>
    </Modal>
  );
};

