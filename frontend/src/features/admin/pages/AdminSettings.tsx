import React from 'react';
import { AdminLayout } from '../../../components/layout/AdminLayout';
import { SystemSettings } from '../components/Settings/SystemSettings';
import { SecuritySettings } from '../components/Settings/SecuritySettings';
import { EmailSettings } from '../components/Settings/EmailSettings';
import { MaintenanceSettings } from '../components/Settings/MaintenanceSettings';

export const AdminSettings: React.FC = () => {
  return (
    <AdminLayout>
      <div className="admin-settings">
        <h1>System Settings</h1>
        <SystemSettings settings={{}} onSave={() => {}} />
        <SecuritySettings settings={{}} onSave={() => {}} />
        <EmailSettings settings={{}} onSave={() => {}} />
        <MaintenanceSettings
          maintenanceMode={false}
          onToggleMaintenance={() => {}}
          onClearCache={() => {}}
        />
      </div>
    </AdminLayout>
  );
};

