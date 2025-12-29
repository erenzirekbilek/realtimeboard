import React from 'react';
import { useParams } from 'react-router-dom';
import { MainLayout } from '../../../components/layout/MainLayout';
import { Board } from '../components/Board';
import { useBoard } from '../hooks/useBoard';
import { Loader } from '../../../components/common/Loader';

export const BoardPage: React.FC = () => {
  const { roomId, boardId } = useParams<{ roomId: string; boardId: string }>();
  const { board, collaborators, loading } = useBoard(roomId!, boardId!);

  if (loading) {
    return (
      <MainLayout>
        <Loader />
      </MainLayout>
    );
  }

  if (!board) {
    return (
      <MainLayout>
        <div>Board not found</div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Board board={board} collaborators={collaborators || []} />
    </MainLayout>
  );
};


