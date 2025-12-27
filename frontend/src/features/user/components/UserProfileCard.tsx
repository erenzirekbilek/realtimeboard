import React from 'react';
import { Avatar } from '../../../components/common/Avatar';
import { Card } from '../../../components/ui/Card';
import { UserProfile } from '../types/user.types';

interface UserProfileCardProps {
  user: UserProfile;
  onEdit?: () => void;
}

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  onEdit,
}) => {
  return (
    <Card className="user-profile-card">
      <div className="profile-header">
        <Avatar src={user.avatar} alt={user.name} size="large" />
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          {user.bio && <p className="bio">{user.bio}</p>}
        </div>
        {onEdit && (
          <button className="edit-button" onClick={onEdit}>
            Edit
          </button>
        )}
      </div>
      <div className="profile-details">
        {user.phone && (
          <div className="detail-item">
            <span className="label">Phone:</span>
            <span>{user.phone}</span>
          </div>
        )}
        {user.location && (
          <div className="detail-item">
            <span className="label">Location:</span>
            <span>{user.location}</span>
          </div>
        )}
        <div className="detail-item">
          <span className="label">Member since:</span>
          <span>{new Date(user.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </Card>
  );
};

