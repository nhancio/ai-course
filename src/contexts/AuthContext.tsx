import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { authService } from '../services/authService';
import { User } from '../types';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'LOGIN_FAILURE' }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_USER'; payload: User };

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: true,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: any) => Promise<void>;
  logout: () => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const queryClient = useQueryClient();

  // Check if user is authenticated on mount
  useQuery(
    'user',
    () => authService.getCurrentUser(),
    {
      enabled: !!state.token,
      retry: false,
      onSuccess: (user) => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token: state.token! } });
      },
      onError: () => {
        dispatch({ type: 'LOGOUT' });
      },
    }
  );

  const loginMutation = useMutation(
    (credentials: { email: string; password: string }) => authService.login(credentials),
    {
      onSuccess: (data) => {
        localStorage.setItem('token', data.token);
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      },
      onError: () => {
        dispatch({ type: 'LOGIN_FAILURE' });
      },
    }
  );

  const signupMutation = useMutation(
    (userData: any) => authService.signup(userData),
    {
      onSuccess: (data) => {
        localStorage.setItem('token', data.token);
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      },
      onError: () => {
        dispatch({ type: 'LOGIN_FAILURE' });
      },
    }
  );

  const login = async (email: string, password: string) => {
    dispatch({ type: 'LOGIN_START' });
    await loginMutation.mutateAsync({ email, password });
  };

  const signup = async (userData: any) => {
    dispatch({ type: 'LOGIN_START' });
    await signupMutation.mutateAsync(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    queryClient.clear();
    dispatch({ type: 'LOGOUT' });
  };

  const updateUser = (user: User) => {
    dispatch({ type: 'UPDATE_USER', payload: user });
  };

  const value: AuthContextType = {
    ...state,
    login,
    signup,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
