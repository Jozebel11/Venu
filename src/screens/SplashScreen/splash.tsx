import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import LottieAnimationView from 'lottie-react-native';

interface SplashProps {
  setLoaded: (loaded: boolean) => void; 
}


const Splash = ({ setLoaded }: SplashProps) => {
 
    return(
      <View style={styles.splash}>
        <LottieAnimationView source={require('../../../assets/animation/venuAnimation.json')}
          autoPlay
          loop={false}
          resizeMode='cover'
          onAnimationFinish={() => {
            console.log('animation finished')
            setLoaded(false)
            
        }}
        />
      </View>
    )      
  
};
const styles = StyleSheet.create({
  splash: {
    backgroundColor: '#E4E2DD',
    width:'100%',
    flex: 1,
    alighItems: 'center',
    margin: 0
  },
});
export default Splash;

