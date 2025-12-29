import React from 'react';
import { UserLayout } from '../../../components/layout/UserLayout';
import { Card } from '../../../components/ui/Card';

export const UserRooms: React.FC = () => {
  return (
    <UserLayout>
      <div className="user-rooms">
        <h1>My Rooms</h1>
        <Card>
          <p>Your rooms will appear here</p>
        </Card>
      </div>
    </UserLayout>
  );
};


