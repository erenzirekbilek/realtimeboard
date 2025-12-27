import React, { useState } from 'react';
import { MainLayout } from '../../../components/layout/MainLayout';
import { RoomList } from '../components/RoomList';
import { CreateRoomModal } from '../components/CreateRoomModal';
import { Button } from '../../../components/common/Button';
import { useRooms } from '../hooks/useRooms';

export const RoomsPage: React.FC = () => {
  const { rooms, loading, createRoom } = useRooms();
  const [createModalOpen, setCreateModalOpen] = useState(false);

  return (
    <MainLayout>
      <div className="rooms-page">
        <div className="rooms-header">
          <h1>Rooms</h1>
          <Button onClick={() => setCreateModalOpen(true)}>Create Room</Button>
        </div>
        <RoomList rooms={rooms} loading={loading} />
        <CreateRoomModal
          isOpen={createModalOpen}
          onClose={() => setCreateModalOpen(false)}
          onSubmit={(data) => {
            createRoom(data);
            setCreateModalOpen(false);
          }}
        />
      </div>
    </MainLayout>
  );
};

