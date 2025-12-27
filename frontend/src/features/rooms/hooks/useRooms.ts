import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { fetchRooms, createRoom as createRoomAction } from '../store/roomSlice';

export const useRooms = () => {
  const dispatch = useDispatch();
  const { rooms, loading, error } = useSelector(
    (state: RootState) => state.rooms
  );

  const loadRooms = () => {
    dispatch(fetchRooms() as any);
  };

  const createRoom = (data: {
    name: string;
    description?: string;
    isPublic: boolean;
  }) => {
    dispatch(createRoomAction(data) as any);
  };

  return {
    rooms,
    loading,
    error,
    loadRooms,
    createRoom,
  };
};

