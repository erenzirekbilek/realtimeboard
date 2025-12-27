import React, { useState } from 'react';
import { AdminLayout } from '../../../components/layout/AdminLayout';
import { LogsTable } from '../components/Logs/LogsTable';
import { LogFilterBar } from '../components/Logs/LogFilterBar';
import { LogDetailModal } from '../components/Logs/LogDetailModal';
import { useAdminLogs } from '../hooks/useAdminLogs';
import { Log, LogFilter } from '../types/adminLog.types';

export const AdminLogs: React.FC = () => {
  const { logs, loading } = useAdminLogs();
  const [filter, setFilter] = useState<LogFilter>({});
  const [selectedLog, setSelectedLog] = useState<Log | null>(null);

  return (
    <AdminLayout>
      <div className="admin-logs">
        <h1>System Logs</h1>
        <LogFilterBar filter={filter} onFilterChange={setFilter} />
        <LogsTable
          logs={logs}
          onLogClick={setSelectedLog}
          loading={loading}
        />
        <LogDetailModal
          log={selectedLog}
          isOpen={!!selectedLog}
          onClose={() => setSelectedLog(null)}
        />
      </div>
    </AdminLayout>
  );
};

