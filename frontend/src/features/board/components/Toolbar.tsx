import React from 'react';
import { Button } from '../../../components/common/Button';

interface ToolbarProps {
  onToolSelect?: (tool: string) => void;
  selectedTool?: string;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  onToolSelect,
  selectedTool,
}) => {
  const tools = ['select', 'text', 'rectangle', 'circle', 'draw'];

  return (
    <div className="board-toolbar">
      {tools.map((tool) => (
        <Button
          key={tool}
          variant={selectedTool === tool ? 'primary' : 'text'}
          onClick={() => onToolSelect?.(tool)}
        >
          {tool}
        </Button>
      ))}
    </div>
  );
};


