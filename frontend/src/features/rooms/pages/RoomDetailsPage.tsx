import React from 'react';
import { useParams } from 'react-router-dom';
import { MainLayout } from '../../../components/layout/MainLayout';
import { useRoom } from '../hooks/useRoom';
import { Card } from '../../../components/ui/Card';
import { Loader } from '../../../components/common/Loader';

export const RoomDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { room, loading } = useRoom(id!);

  if (loading) {
    return (
      <MainLayout>
        <Loader />
      </MainLayout>
    );
  }

  if (!room) {
    return (
      <MainLayout>
        <div>Room not found</div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="room-details-page">
        <Card title={room.name}>
          {room.description && <p>{room.description}</p>}
          <p>Members: {room.memberCount}</p>
          <p>Owner: {room.ownerName}</p>
        </Card>
      </div>
    </MainLayout>
  );
};

