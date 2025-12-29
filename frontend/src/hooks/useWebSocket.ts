import { useEffect, useRef, useState } from 'react';

interface UseWebSocketReturn {
  socket: WebSocket | null;
  sendMessage: (event: string, data: any) => void;
  connected: boolean;
}

export const useWebSocket = (url: string): UseWebSocketReturn => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [connected, setConnected] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:3000${url}`);
    
    ws.onopen = () => {
      setConnected(true);
      setSocket(ws);
    };

    ws.onclose = () => {
      setConnected(false);
      setSocket(null);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socketRef.current = ws;

    return () => {
      ws.close();
    };
  }, [url]);

  const sendMessage = (event: string, data: any) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ event, data }));
    }
  };

  return { socket, sendMessage, connected };
};


