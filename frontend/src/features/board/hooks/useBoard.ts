import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { fetchBoard } from '../store/boardSlice';

export const useBoard = (roomId: string, boardId: string) => {
  const dispatch = useDispatch();
  const { currentBoard, collaborators, loading, error } = useSelector(
    (state: RootState) => state.board
  );

  const loadBoard = () => {
    dispatch(fetchBoard({ roomId, boardId }) as any);
  };

  return {
    board: currentBoard,
    collaborators,
    loading,
    error,
    loadBoard,
  };
};


