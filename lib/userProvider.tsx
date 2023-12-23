import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../consts/types/user";

// Create a context with an initial value
const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserContextType {
  user: User | null;
  storeUser: (userData: User) => void;
}

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const storeUser = async (userData: User) => {
    try {
      setUser(userData);
      const jsonValue = JSON.stringify(userData);
      await AsyncStorage.setItem("user", jsonValue);
    } catch (e) {
      // saving error
      console.error(e);
    }
  };

  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      if (jsonValue) {
        const userData = JSON.parse(jsonValue) as User;
        setUser(userData);
      }
    } catch (e) {
      // error reading value
      console.error(e);
    }
  };

  useEffect(() => {
    // getUser();
    initUser();
  }, []);

  const contextValue: UserContextType = {
    user,
    storeUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
const initUser = async () => {
  try {
    await AsyncStorage.removeItem("user");
  } catch (e) {
    // saving error
    console.log(e);
  }
};
