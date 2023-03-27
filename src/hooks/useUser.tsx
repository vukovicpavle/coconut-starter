import React, {createContext, useContext, useEffect, useState} from 'react';
import {User} from '../data/User';
import Storage from '../services/Storage';

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  updateUser: (user: Partial<User>) => void;
  // TODO
  login?: (user: User) => void;
  logout?: () => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  updateUser: () => {},
});

export const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getUserFromStorage() {
      const storedUser = await Storage.get<User>('user');

      if (storedUser) {
        setUser(storedUser);
      }
    }

    getUserFromStorage();
  }, []);

  function updateUser(userData: Partial<User>) {
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

export const useUser = () => {
  return useContext(UserContext);
};
