import { useEffect } from 'react';
import { useWebSocket } from '../../../hooks/useWebSocket';

export const useCollaboration = (roomId: string, boardId: string) => {
  const { socket, sendMessage } = useWebSocket(`/rooms/${roomId}/boards/${boardId}`);

  useEffect(() => {
    if (socket) {
      socket.on('element-update', (data: any) => {
        // Handle element updates from other users
      });

      socket.on('cursor-move', (data: any) => {
        // Handle cursor movements from other users
      });

      return () => {
        socket.off('element-update');
        socket.off('cursor-move');
      };
    }
  }, [socket]);

  const sendElementUpdate = (elementId: string, updates: any) => {
    sendMessage('element-update', { elementId, updates });
  };

  const sendCursorMove = (x: number, y: number) => {
    sendMessage('cursor-move', { x, y });
  };

  return {
    sendElementUpdate,
    sendCursorMove,
  };
};

