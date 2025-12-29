import React from 'react';
import { Card } from '../../../components/ui/Card';
import { UserActivity } from '../types/user.types';

interface RecentActivityProps {
  activities: UserActivity[];
  limit?: number;
}

export const RecentActivity: React.FC<RecentActivityProps> = ({
  activities,
  limit = 10,
}) => {
  const displayActivities = activities.slice(0, limit);

  return (
    <Card title="Recent Activity" className="recent-activity">
      {displayActivities.length === 0 ? (
        <p>No recent activity</p>
      ) : (
        <ul className="activity-list">
          {displayActivities.map((activity) => (
            <li key={activity.id} className="activity-item">
              <span className="activity-description">
                {activity.description}
              </span>
              <span className="activity-time">
                {new Date(activity.timestamp).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};


