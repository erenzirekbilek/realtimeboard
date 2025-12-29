import React, { useState } from 'react';
import { Button } from '../../../components/common/Button';
import { Avatar } from '../../../components/common/Avatar';

interface UserAvatarUploadProps {
  currentAvatar?: string;
  onUpload: (file: File) => void;
  loading?: boolean;
}

export const UserAvatarUpload: React.FC<UserAvatarUploadProps> = ({
  currentAvatar,
  onUpload,
  loading = false,
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onUpload(file);
    }
  };

  return (
    <div className="avatar-upload">
      <Avatar src={preview || currentAvatar} size="large" />
      <div className="upload-controls">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          id="avatar-upload"
          style={{ display: 'none' }}
        />
        <label htmlFor="avatar-upload">
          <Button as="span" loading={loading}>
            Upload Avatar
          </Button>
        </label>
      </div>
    </div>
  );
};


