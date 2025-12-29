import React from 'react';
import { Button } from '../../../common/Button';

interface BulkActionBarProps {
  selectedCount: number;
  onBulkAction: (action: string) => void;
}

export const BulkActionBar: React.FC<BulkActionBarProps> = ({
  selectedCount,
  onBulkAction,
}) => {
  if (selectedCount === 0) return null;

  return (
    <div className="bulk-action-bar">
      <span>{selectedCount} selected</span>
      <Button
        variant="error"
        onClick={() => onBulkAction('ban')}
      >
        Ban Selected
      </Button>
      <Button
        variant="primary"
        onClick={() => onBulkAction('unban')}
      >
        Unban Selected
      </Button>
    </div>
  );
};


