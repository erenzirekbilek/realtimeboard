import React, { useState } from 'react';
import { AdminLayout } from '../../../components/layout/AdminLayout';
import { RoomsTable } from '../components/Rooms/RoomsTable';
import { RoomFilterBar } from '../components/Rooms/RoomFilterBar';
import { RoomDetailModal } from '../components/Rooms/RoomDetailModal';
import { DeleteRoomModal } from '../components/Rooms/DeleteRoomModal';
import { useAdminRooms } from '../hooks/useAdminRooms';
import { AdminRoom, RoomFilter } from '../types/adminRoom.types';

export const AdminRooms: React.FC = () => {
  const { rooms, loading, deleteRoom } = useAdminRooms();
  const [filter, setFilter] = useState<RoomFilter>({});
  const [selectedRoom, setSelectedRoom] = useState<AdminRoom | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <AdminLayout>
      <div className="admin-rooms">
        <h1>Rooms Management</h1>
        <RoomFilterBar filter={filter} onFilterChange={setFilter} />
        <RoomsTable
          rooms={rooms}
          onRoomClick={setSelectedRoom}
          loading={loading}
        />
        <RoomDetailModal
          room={selectedRoom}
          isOpen={!!selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
        {selectedRoom && (
          <DeleteRoomModal
            roomName={selectedRoom.name}
            isOpen={deleteModalOpen}
            onClose={() => setDeleteModalOpen(false)}
            onConfirm={() => {
              deleteRoom(selectedRoom.id);
              setDeleteModalOpen(false);
            }}
          />
        )}
      </div>
    </AdminLayout>
  );
};


