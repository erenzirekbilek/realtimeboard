export interface Log {
  id: string;
  level: 'info' | 'warning' | 'error';
  message: string;
  userId?: string;
  action: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

export interface LogFilter {
  level?: string;
  userId?: string;
  action?: string;
  startDate?: string;
  endDate?: string;
}


