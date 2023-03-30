import React, {createContext, useContext, useEffect, useState} from 'react';
import {UserModel} from '../data/UserModel';
import Storage from '../services/StorageService';

type UserContextType = {
  user: UserModel | null;
  setUser: React.Dispatch<React.SetStateAction<UserModel | null>>;
  updateUser: (user: Partial<UserModel>) => void;
  // TODO
  login?: (user: UserModel) => void;
  logout?: () => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  updateUser: () => {},
});

export const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<UserModel | null>(null);

  useEffect(() => {
    async function getUserFromStorage() {
      const storedUser = await Storage.get<UserModel>('user');

      if (storedUser) {
        setUser(storedUser);
      }
    }

    getUserFromStorage();
  }, []);

  function updateUser(userData: Partial<UserModel>) {
    if (userData) {
      setUser(prev => ({...prev, ...user}));
    }
  }

  return (
    <UserContext.Provider value={{user, setUser, updateUser}}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  return useContext(UserContext);
}
