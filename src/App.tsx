/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {Linking} from 'react-native';
import Splash from './screens/SplashScreen/splash';
import AppNavigation from './navigation/AppNavigation';
import {storeToken} from './utils/AuthTokenStorage/AuthTokenStorage';

function App(): JSX.Element {
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    const handleDeepLink = (event: any) => {
      const url = event.url;
      if (!url) return;

      const token = new URLSearchParams(url.split('?')[1]).get('token');
      if (token) {
        storeToken(token);
      }
    };

    // Listen for when the app is opened via a deep link
    const subscription = Linking.addEventListener('url', handleDeepLink);

    // Check if the app was opened via a deep link
    Linking.getInitialURL().then(url => {
      if (url) {
        handleDeepLink({url});
      }
    });

    // Cleanup
    return () => {
      subscription.remove();
    };
  }, []);

  if (loaded === false) {
    return <Splash setLoaded={setLoaded} />;
  } else {
    return <AppNavigation />;
  }
}

export default App;
