export interface Room {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  ownerName: string;
  memberCount: number;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface RoomMember {
  userId: string;
  userName: string;
  role: 'owner' | 'member' | 'viewer';
  joinedAt: string;
}


