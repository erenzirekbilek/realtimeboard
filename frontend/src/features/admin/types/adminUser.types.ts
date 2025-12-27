import { User } from '../../user/types/user.types';

export interface AdminUser extends User {
  isBanned: boolean;
  banReason?: string;
  lastLogin?: string;
  loginCount: number;
}

export interface UserFilter {
  search?: string;
  role?: string;
  isBanned?: boolean;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

