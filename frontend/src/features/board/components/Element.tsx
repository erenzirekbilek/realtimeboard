import React from 'react';
import { BoardElement } from '../types/board.types';

interface ElementProps {
  element: BoardElement;
  onSelect?: (element: BoardElement) => void;
  onUpdate?: (elementId: string, updates: Partial<BoardElement>) => void;
}

export const Element: React.FC<ElementProps> = ({
  element,
  onSelect,
  onUpdate,
}) => {
  const handleClick = () => {
    onSelect?.(element);
  };

  const renderElement = () => {
    switch (element.type) {
      case 'text':
        return (
          <div
            style={{
              position: 'absolute',
              left: element.x,
              top: element.y,
              ...element.style,
            }}
            onClick={handleClick}
          >
            {element.content}
          </div>
        );
      case 'shape':
        return (
          <div
            style={{
              position: 'absolute',
              left: element.x,
              top: element.y,
              width: element.width,
              height: element.height,
              ...element.style,
            }}
            onClick={handleClick}
          />
        );
      default:
        return null;
    }
  };

  return renderElement();
};


