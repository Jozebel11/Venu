import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Sign/screens/LoginScreen/component';
import HomeScreen from '../screens/Home/home'; // Create this as your main screen after login
import {getToken} from '../utils/AuthTokenStorage/AuthTokenStorage';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const bootstrapAsync = async () => {
      const userToken = await getToken();
      setIsAuthenticated(!!userToken);
    };

    bootstrapAsync();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
