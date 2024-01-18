import React from 'react';
import {Button, View} from 'react-native';
import {signInWithGoogle, signInWithFacebook} from '../../../../api/AuthService/AuthService';

const LoginScreen = ({}: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Sign in with Google" onPress={signInWithGoogle} />
      <Button title="Sign in with Facebook" onPress={signInWithFacebook} />
    </View>
  );
};

export default LoginScreen;
