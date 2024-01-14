import { User } from '@app/types';

export interface AuthState {
  user: User | null;
  accesToken: string;
}

export enum AuthActionType {
  STORE_AUTH = 'auth/storeAuth',
  CLEAR_AUTH = 'auth/clearAuth',
}
