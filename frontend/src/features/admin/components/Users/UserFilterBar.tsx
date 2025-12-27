import React from 'react';
import { Input } from '../../../common/Input';
import { UserFilter } from '../../types/adminUser.types';

interface UserFilterBarProps {
  filter: UserFilter;
  onFilterChange: (filter: UserFilter) => void;
}

export const UserFilterBar: React.FC<UserFilterBarProps> = ({
  filter,
  onFilterChange,
}) => {
  return (
    <div className="user-filter-bar">
      <Input
        placeholder="Search users..."
        value={filter.search || ''}
        onChange={(e) =>
          onFilterChange({ ...filter, search: e.target.value })
        }
      />
      <select
        value={filter.role || ''}
        onChange={(e) =>
          onFilterChange({ ...filter, role: e.target.value || undefined })
        }
      >
        <option value="">All Roles</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <select
        value={filter.isBanned !== undefined ? String(filter.isBanned) : ''}
        onChange={(e) =>
          onFilterChange({
            ...filter,
            isBanned:
              e.target.value === '' ? undefined : e.target.value === 'true',
          })
        }
      >
        <option value="">All Status</option>
        <option value="false">Active</option>
        <option value="true">Banned</option>
      </select>
    </div>
  );
};

