//Auth Slice Types
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

//Register Slice Types
export interface RegisterData {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  password: string;
}

export interface RegisterState {
  loading: boolean;
  success: boolean;
  error: string | null;
}
