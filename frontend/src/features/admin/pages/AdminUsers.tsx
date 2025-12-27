import React, { useState } from 'react';
import { AdminLayout } from '../../../components/layout/AdminLayout';
import { UsersTable } from '../components/Users/UsersTable';
import { UserFilterBar } from '../components/Users/UserFilterBar';
import { UserDetailModal } from '../components/Users/UserDetailModal';
import { BanUserModal } from '../components/Users/BanUserModal';
import { useAdminUsers } from '../hooks/useAdminUsers';
import { AdminUser, UserFilter } from '../types/adminUser.types';

export const AdminUsers: React.FC = () => {
  const { users, loading, banUser } = useAdminUsers();
  const [filter, setFilter] = useState<UserFilter>({});
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);
  const [banModalOpen, setBanModalOpen] = useState(false);

  return (
    <AdminLayout>
      <div className="admin-users">
        <h1>Users Management</h1>
        <UserFilterBar filter={filter} onFilterChange={setFilter} />
        <UsersTable
          users={users}
          onUserClick={setSelectedUser}
          loading={loading}
        />
        <UserDetailModal
          user={selectedUser}
          isOpen={!!selectedUser}
          onClose={() => setSelectedUser(null)}
        />
        {selectedUser && (
          <BanUserModal
            userId={selectedUser.id}
            userName={selectedUser.name}
            isOpen={banModalOpen}
            onClose={() => setBanModalOpen(false)}
            onConfirm={(reason) => {
              banUser(selectedUser.id, reason);
              setBanModalOpen(false);
            }}
          />
        )}
      </div>
    </AdminLayout>
  );
};

