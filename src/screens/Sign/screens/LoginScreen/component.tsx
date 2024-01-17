import React from 'react';
import {Button, View} from 'react-native';
import * as AuthService from '../../../../api/AuthService/AuthService';

const LoginScreen = ({navigation}) => {
  const handleGoogleSignIn = async () => {
    const user = await AuthService.signInWithGoogle();
    if (user) {
      navigation.navigate('Profile'); // Navigate to profile after successful login
    }
  };

  const handleFacebookSignIn = async () => {
    const user = await AuthService.signInWithFacebook();
    if (user) {
      navigation.navigate('Profile'); // Navigate to profile after successful login
    }
  };

  return (
    <View>
      <Button title="Sign in with Google" onPress={handleGoogleSignIn} />
      <Button title="Sign in with Facebook" onPress={handleFacebookSignIn} />
    </View>
  );
};

export default LoginScreen;
