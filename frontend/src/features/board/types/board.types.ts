export interface Board {
  id: string;
  roomId: string;
  name: string;
  elements: BoardElement[];
  createdAt: string;
  updatedAt: string;
}

export interface BoardElement {
  id: string;
  type: 'text' | 'shape' | 'image' | 'drawing';
  x: number;
  y: number;
  width?: number;
  height?: number;
  content?: string;
  style?: Record<string, any>;
}

export interface Collaborator {
  userId: string;
  userName: string;
  avatar?: string;
  cursor?: { x: number; y: number };
}

