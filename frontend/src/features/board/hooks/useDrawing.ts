import { useState, useCallback } from 'react';

export const useDrawing = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentPath, setCurrentPath] = useState<Array<{ x: number; y: number }>>([]);

  const startDrawing = useCallback((x: number, y: number) => {
    setIsDrawing(true);
    setCurrentPath([{ x, y }]);
  }, []);

  const continueDrawing = useCallback((x: number, y: number) => {
    if (isDrawing) {
      setCurrentPath((prev) => [...prev, { x, y }]);
    }
  }, [isDrawing]);

  const stopDrawing = useCallback(() => {
    setIsDrawing(false);
    const path = currentPath;
    setCurrentPath([]);
    return path;
  }, [currentPath]);

  return {
    isDrawing,
    currentPath,
    startDrawing,
    continueDrawing,
    stopDrawing,
  };
};


