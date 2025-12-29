export interface AdminRoom {
  id: string;
  name: string;
  owner: string;
  memberCount: number;
  createdAt: string;
  isActive: boolean;
}

export interface RoomFilter {
  search?: string;
  owner?: string;
  isActive?: boolean;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}


