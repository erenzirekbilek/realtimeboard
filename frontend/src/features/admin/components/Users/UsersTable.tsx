import React from 'react';
import { DataTable, Column } from '../../../ui/DataTable';
import { AdminUser } from '../../types/adminUser.types';
import { Badge } from '../../../common/Badge';

interface UsersTableProps {
  users: AdminUser[];
  onUserClick?: (user: AdminUser) => void;
  loading?: boolean;
}

export const UsersTable: React.FC<UsersTableProps> = ({
  users,
  onUserClick,
  loading,
}) => {
  const columns: Column<AdminUser>[] = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    {
      key: 'role',
      label: 'Role',
      render: (user) => <Badge>{user.role}</Badge>,
    },
    {
      key: 'isBanned',
      label: 'Status',
      render: (user) => (
        <Badge variant={user.isBanned ? 'error' : 'success'}>
          {user.isBanned ? 'Banned' : 'Active'}
        </Badge>
      ),
    },
    { key: 'loginCount', label: 'Logins' },
    {
      key: 'lastLogin',
      label: 'Last Login',
      render: (user) =>
        user.lastLogin
          ? new Date(user.lastLogin).toLocaleDateString()
          : 'Never',
    },
  ];

  return (
    <DataTable
      data={users}
      columns={columns}
      onRowClick={onUserClick}
      loading={loading}
    />
  );
};

