import React, { useState } from 'react';
import { FormGroup } from '../../../ui/FormGroup';
import { Button } from '../../../common/Button';
import { Alert } from '../../../ui/Alert';

interface MaintenanceSettingsProps {
  onToggleMaintenance: (enabled: boolean) => void;
  onClearCache: () => void;
  maintenanceMode: boolean;
  loading?: boolean;
}

export const MaintenanceSettings: React.FC<MaintenanceSettingsProps> = ({
  onToggleMaintenance,
  onClearCache,
  maintenanceMode,
  loading = false,
}) => {
  return (
    <div className="maintenance-settings">
      {maintenanceMode && (
        <Alert variant="warning" message="Maintenance mode is currently enabled" />
      )}
      <div className="maintenance-actions">
        <Button
          variant={maintenanceMode ? 'error' : 'primary'}
          onClick={() => onToggleMaintenance(!maintenanceMode)}
          loading={loading}
        >
          {maintenanceMode ? 'Disable' : 'Enable'} Maintenance Mode
        </Button>
        <Button variant="warning" onClick={onClearCache} loading={loading}>
          Clear Cache
        </Button>
      </div>
    </div>
  );
};

