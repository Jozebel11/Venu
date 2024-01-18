// src/services/authService.js
import {Linking} from 'react-native';

export const signInWithGoogle = () => {
  Linking.openURL('http://yourbackend.com/auth/google');
};

export const signInWithFacebook = () => {
  Linking.openURL('http://yourbackend.com/auth/facebook');
};
