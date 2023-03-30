import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageService = {
  async set(key: string, value: any) {
    if (!key || !value) {
      return;
    }
    try {
      if (typeof value === 'string') {
        await AsyncStorage.setItem(key, value);
      } else {
        await AsyncStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      return;
    }
  },

  async get<T>(key: string) {
    if (!key) {
      return;
    }
    const value = await AsyncStorage.getItem(key);
    try {
      if (value) {
        return JSON.parse(value) as T;
      }
    } catch (error) {
      return value as T;
    }
  },

  async remove(key: string) {
    if (!key) {
      return;
    }
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      return;
    }
  },
};

export default StorageService;
