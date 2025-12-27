import React from 'react';
import { AdminLayout } from '../../../components/layout/AdminLayout';
import { Card } from '../../../components/ui/Card';

export const AdminAnalytics: React.FC = () => {
  return (
    <AdminLayout>
      <div className="admin-analytics">
        <h1>Analytics</h1>
        <Card>
          <p>Analytics dashboard will be displayed here</p>
        </Card>
      </div>
    </AdminLayout>
  );
};

