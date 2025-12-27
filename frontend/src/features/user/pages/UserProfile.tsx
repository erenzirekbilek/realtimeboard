import React from 'react';
import { UserLayout } from '../../../components/layout/UserLayout';
import { UserProfileCard } from '../components/UserProfileCard';
import { UserAvatarUpload } from '../components/UserAvatarUpload';
import { useUserProfile } from '../hooks/useUserProfile';

export const UserProfile: React.FC = () => {
  const { profile, loading, updateAvatar } = useUserProfile();

  if (loading) {
    return <UserLayout><div>Loading...</div></UserLayout>;
  }

  if (!profile) {
    return <UserLayout><div>Profile not found</div></UserLayout>;
  }

  return (
    <UserLayout>
      <div className="user-profile">
        <h1>Profile</h1>
        <UserProfileCard user={profile} />
        <UserAvatarUpload
          currentAvatar={profile.avatar}
          onUpload={updateAvatar}
        />
      </div>
    </UserLayout>
  );
};

