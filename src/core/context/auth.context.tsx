import { localStorageKeys } from '@app/common/constants';
import { AuthContextType, AuthProviderProps, LoginResponse, User } from '@app/types';
import { getCookie, removeAllCookies, replaceCookie } from '@core/helpers/cookie.helper';
import { jwtIsValid } from '@core/helpers/jwt.helper';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(getCookie(localStorageKeys.USER_TOKEN));

  const [isLoading, setIsLoading] = useState(true);

  const startSession = useCallback(({ accessToken, user }: LoginResponse) => {
    replaceCookie(localStorageKeys.USER_TOKEN, accessToken);
    setUser(user);
  }, []);

  const _setUser = (newUser: User) => {
    setUser(newUser);
  };

  const endSession = useCallback(() => {
    setUser(null);
    removeAllCookies();
  }, []);

  useEffect(() => {
    const isValid = jwtIsValid(token || '');
    if (!token || !isValid) {
      endSession();
      setIsLoading(false);
      return;
    }
    const user = jwtDecode<JwtPayload>(token || '') as User;
    console.log(user);

    setUser(user);
    setIsLoading(false);
  }, [token, endSession]);

  const value = useMemo(
    () => ({
      user,
      startSession,
      endSession,
      isLoading,
      _setUser,
      token,
    }),
    [user, startSession, endSession, isLoading, token],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
