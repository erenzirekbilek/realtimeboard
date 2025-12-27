import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { fetchUserProfile, updateUserAvatar } from '../store/userSlice';
import { UserProfile } from '../types/user.types';

export const useUserProfile = () => {
  const dispatch = useDispatch();
  const { profile, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  const loadProfile = () => {
    dispatch(fetchUserProfile() as any);
  };

  const updateAvatar = (file: File) => {
    dispatch(updateUserAvatar(file) as any);
  };

  return {
    profile,
    loading,
    error,
    loadProfile,
    updateAvatar,
  };
};

