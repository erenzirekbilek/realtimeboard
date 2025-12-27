import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { fetchRooms, deleteRoom } from '../store/adminRoomsSlice';

export const useAdminRooms = () => {
  const dispatch = useDispatch();
  const { rooms, loading, error } = useSelector(
    (state: RootState) => state.adminRooms
  );

  const loadRooms = () => {
    dispatch(fetchRooms() as any);
  };

  const deleteRoomAction = (roomId: string) => {
    dispatch(deleteRoom(roomId) as any);
  };

  return {
    rooms,
    loading,
    error,
    loadRooms,
    deleteRoom: deleteRoomAction,
  };
};

