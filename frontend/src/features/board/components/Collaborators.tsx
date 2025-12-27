import React from 'react';
import { Avatar } from '../../../components/common/Avatar';
import { Collaborator as CollaboratorType } from '../types/board.types';

interface CollaboratorsProps {
  collaborators: CollaboratorType[];
}

export const Collaborators: React.FC<CollaboratorsProps> = ({
  collaborators,
}) => {
  return (
    <div className="board-collaborators">
      <h3>Collaborators</h3>
      {collaborators.map((collaborator) => (
        <div key={collaborator.userId} className="collaborator-item">
          <Avatar src={collaborator.avatar} alt={collaborator.userName} />
          <span>{collaborator.userName}</span>
        </div>
      ))}
    </div>
  );
};

