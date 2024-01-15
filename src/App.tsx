/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Splash from './screens/SplashScreen/splash';

function App(): JSX.Element {
  const [loaded, setLoaded] = useState<boolean>(false);
  if (loaded === false) {
    return <Splash setLoaded={setLoaded} />;
  } else {
    return (
      <View style={styles.text}>
        <Text>HAVE YOU EVER DRANK BAILEYS FROM A SHOE?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    marginTop: 100,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
