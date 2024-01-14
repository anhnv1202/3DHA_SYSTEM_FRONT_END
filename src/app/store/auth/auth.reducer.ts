import { AppAction } from '@core/types/redux.type';
import { AuthActionType, AuthState } from './auth.type';

export default function authReducer(state: AuthState = initialState, action: AppAction): AuthState {
  switch (action.type) {
    case AuthActionType.STORE_AUTH:
      return {
        ...state,
        user: action.payload?.user,
        accesToken: action.payload?.accesToken,
      };
    case AuthActionType.CLEAR_AUTH:
      return initialState;
    default:
      return state;
  }
}

const initialState: AuthState = {
  user: null,
  accesToken: '',
};
