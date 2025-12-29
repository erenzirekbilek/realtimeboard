import React from 'react';
import { Canvas } from './Canvas';
import { Toolbar } from './Toolbar';
import { Collaborators } from './Collaborators';
import { BoardSettings } from './BoardSettings';
import { Board as BoardType } from '../types/board.types';

interface BoardProps {
  board: BoardType;
  collaborators: Array<{ userId: string; userName: string; avatar?: string }>;
  onElementAdd?: (element: any) => void;
  onElementUpdate?: (elementId: string, updates: any) => void;
  onElementDelete?: (elementId: string) => void;
}

export const Board: React.FC<BoardProps> = ({
  board,
  collaborators,
  onElementAdd,
  onElementUpdate,
  onElementDelete,
}) => {
  return (
    <div className="board-container">
      <Toolbar />
      <div className="board-content">
        <Canvas
          board={board}
          onElementAdd={onElementAdd}
          onElementUpdate={onElementUpdate}
          onElementDelete={onElementDelete}
        />
        <Collaborators collaborators={collaborators} />
      </div>
      <BoardSettings board={board} />
    </div>
  );
};


