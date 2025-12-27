import React from 'react';
import { Card } from '../../../components/ui/Card';
import { UserStats as UserStatsType } from '../types/user.types';

interface UserStatsProps {
  stats: UserStatsType;
}

export const UserStats: React.FC<UserStatsProps> = ({ stats }) => {
  return (
    <div className="user-stats">
      <Card className="stat-card">
        <h3>Total Rooms</h3>
        <p className="stat-value">{stats.totalRooms}</p>
      </Card>
      <Card className="stat-card">
        <h3>Active Rooms</h3>
        <p className="stat-value">{stats.activeRooms}</p>
      </Card>
      <Card className="stat-card">
        <h3>Total Boards</h3>
        <p className="stat-value">{stats.totalBoards}</p>
      </Card>
      <Card className="stat-card">
        <h3>Collaborations</h3>
        <p className="stat-value">{stats.totalCollaborations}</p>
      </Card>
    </div>
  );
};

