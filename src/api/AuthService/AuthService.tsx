import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from 'react-native-google-signin';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';

const API_URL = 'YOUR_BACKEND_API_URL'; // Set your backend API URL here

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const token = userInfo.idToken;

    // Send token to your backend
    const res = await fetch(`${API_URL}/auth/google`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token}),
    });

    const data = await res.json();
    await AsyncStorage.setItem('userToken', data.token); // Store token
    return data.user;
  } catch (error) {
    console.error(error);
  }
};

export const signInWithFacebook = async () => {
  try {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Send token to your backend
    const res = await fetch(`${API_URL}/auth/facebook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token: data.accessToken.toString()}),
    });

    const json = await res.json();
    await AsyncStorage.setItem('userToken', json.token); // Store token
    return json.user;
  } catch (error) {
    console.error(error);
  }
};

export const signOut = async () => {
  await AsyncStorage.removeItem('userToken');
  // Additional sign out logic if needed
};
