import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { User } from "../consts/types/user";

export const useUser = () => {
  const [user, setUser] = useState<User | null>();
  const storeUser = async (userData: User) => {
    try {
      setUser(userData);
      const jsonValue = JSON.stringify(userData);
      await AsyncStorage.setItem("user", jsonValue);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  const initUser = async () => {
    try {
      await AsyncStorage.removeItem("user");
    } catch (e) {
      // saving error
      console.log(e);
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
    }
  };

  useEffect(() => {
    // getUser();
    // initUser();
  }, []);
  return { user, storeUser };
};
