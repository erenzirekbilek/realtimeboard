export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile extends User {
  bio?: string;
  phone?: string;
  location?: string;
}

export interface UserStats {
  totalRooms: number;
  activeRooms: number;
  totalBoards: number;
  totalCollaborations: number;
}

export interface UserActivity {
  id: string;
  type: string;
  description: string;
  timestamp: string;
}


