import React from 'react';
import {View, StyleSheet} from 'react-native';

import LottieView from 'lottie-react-native';

interface SplashProps {
  setLoaded: (loaded: boolean) => void;
}

const Splash = ({setLoaded}: SplashProps) => {
  return (
    <View style={styles.splash}>
      <LottieView
        style={{flex: 1}}
        source={require('../../../assets/animation/logo-6.json')}
        autoPlay
        loop={false}
        resizeMode="cover"
        onAnimationFinish={() => {
          console.log('animation finished');
          setLoaded(true);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  splash: {
    backgroundColor: '#1e1e1e',
    width: '100%',
    flex: 1,
    alighItems: 'center',
    margin: 0,
  },
});
export default Splash;
