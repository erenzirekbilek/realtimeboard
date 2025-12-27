import React from 'react';
import { UserLayout } from '../../../components/layout/UserLayout';
import { UserStats } from '../components/UserStats';
import { RecentActivity } from '../components/RecentActivity';
import { useUserStats } from '../hooks/useUserStats';
import { useUserProfile } from '../hooks/useUserProfile';

export const UserDashboard: React.FC = () => {
  const { stats, loading: statsLoading } = useUserStats();
  const { profile, loading: profileLoading } = useUserProfile();

  return (
    <UserLayout>
      <div className="user-dashboard">
        <h1>Dashboard</h1>
        {!statsLoading && stats && <UserStats stats={stats} />}
        {!profileLoading && profile && (
          <RecentActivity activities={profile.activities || []} />
        )}
      </div>
    </UserLayout>
  );
};

