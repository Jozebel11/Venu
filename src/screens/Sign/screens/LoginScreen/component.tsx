import React from 'react';
import { View, Text } from 'react-native';
import AuthButton from '../components/AuthButton';
import { loginWithFacebook, loginWithGoogle } from '../api/AuthService';

function LoginScreen({ navigation }) {
  const handleFacebookLogin = async () => {
    try {
      const token = await loginWithFacebook();
      navigation.navigate('Profile', { token });
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const token = await loginWithGoogle();
      navigation.navigate('Profile', { token });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Welcome to Venu</Text>
      <AuthButton title="Login with Facebook" onPress={handleFacebookLogin} />
      <AuthButton title="Login with Google" onPress={handleGoogleLogin} />
    </View>
  );
}

export default LoginScreen;