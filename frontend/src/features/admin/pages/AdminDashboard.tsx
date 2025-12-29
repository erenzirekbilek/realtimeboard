import React from 'react';
import { AdminLayout } from '../../../components/layout/AdminLayout';
import { StatsSummary } from '../components/Dashboard/StatsSummary';
import { SystemHealthChart } from '../components/Dashboard/SystemHealthChart';
import { UserActivityChart } from '../components/Dashboard/UserActivityChart';
import { useAdminStats } from '../hooks/useAdminStats';

export const AdminDashboard: React.FC = () => {
  const { stats, health, loading } = useAdminStats();

  return (
    <AdminLayout>
      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>
        {!loading && stats && <StatsSummary stats={stats} />}
        {!loading && health && <SystemHealthChart health={health} />}
        {!loading && <UserActivityChart data={[]} />}
      </div>
    </AdminLayout>
  );
};


