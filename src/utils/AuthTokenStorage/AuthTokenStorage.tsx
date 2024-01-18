import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToken = async (token: any) => {
  try {
    await AsyncStorage.setItem('userToken', token);
  } catch (e) {
    console.error('Error storing the token', e);
  }
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('userToken');
  } catch (e) {
    console.error('Error retrieving the token', e);
    return null;
  }
};
