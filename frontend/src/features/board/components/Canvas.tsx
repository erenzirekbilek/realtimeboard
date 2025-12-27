import React from 'react';
import { Element } from './Element';
import { Board } from '../types/board.types';

interface CanvasProps {
  board: Board;
  onElementAdd?: (element: any) => void;
  onElementUpdate?: (elementId: string, updates: any) => void;
  onElementDelete?: (elementId: string) => void;
}

export const Canvas: React.FC<CanvasProps> = ({
  board,
  onElementAdd,
  onElementUpdate,
  onElementDelete,
}) => {
  return (
    <div className="board-canvas">
      {board.elements.map((element) => (
        <Element
          key={element.id}
          element={element}
          onUpdate={onElementUpdate}
        />
      ))}
    </div>
  );
};

