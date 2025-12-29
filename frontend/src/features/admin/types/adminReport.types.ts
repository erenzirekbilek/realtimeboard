export interface Report {
  id: string;
  type: 'user' | 'room' | 'content';
  targetId: string;
  targetType: string;
  reporterId: string;
  reason: string;
  status: 'pending' | 'resolved' | 'rejected';
  createdAt: string;
  resolvedAt?: string;
  resolvedBy?: string;
}

export interface ReportFilter {
  type?: string;
  status?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}


