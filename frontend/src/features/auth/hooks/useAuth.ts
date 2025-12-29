import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { login, logout, register } from '../store/authSlice';
import { LoginCredentials, RegisterData } from '../types/auth.types';

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const handleLogin = async (credentials: LoginCredentials) => {
    return dispatch(login(credentials) as any);
  };

  const handleRegister = async (data: RegisterData) => {
    return dispatch(register(data) as any);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    ...auth,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
  };
};


