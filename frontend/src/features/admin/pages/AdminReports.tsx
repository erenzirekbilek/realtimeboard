import React, { useState } from 'react';
import { AdminLayout } from '../../../components/layout/AdminLayout';
import { ReportsTable } from '../components/Content/ReportsTable';
import { ReportDetailModal } from '../components/Content/ReportDetailModal';
import { ReportActionBar } from '../components/Content/ReportActionBar';
import { useAdminReports } from '../hooks/useAdminReports';
import { Report } from '../types/adminReport.types';

export const AdminReports: React.FC = () => {
  const { reports, loading, resolveReport, rejectReport } = useAdminReports();
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  return (
    <AdminLayout>
      <div className="admin-reports">
        <h1>Reports Management</h1>
        <ReportsTable
          reports={reports}
          onReportClick={setSelectedReport}
          loading={loading}
        />
        {selectedReport && (
          <>
            <ReportDetailModal
              report={selectedReport}
              isOpen={!!selectedReport}
              onClose={() => setSelectedReport(null)}
            />
            <ReportActionBar
              reportId={selectedReport.id}
              onResolve={resolveReport}
              onReject={rejectReport}
            />
          </>
        )}
      </div>
    </AdminLayout>
  );
};


