import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Welcome from './pages/Welcome';
import Main from './pages/Main';
import Register from './pages/Register';
import Note from './pages/Note';
import Profile from './pages/Profile';

const Stack = createStackNavigator();

function Routes() {
  const introduction = useSelector((state) => state.user.firstStart);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {introduction ? (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Welcome"
            component={Welcome}
          />
        ) : (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Main"
              component={Main}
            />
            <Stack.Screen
              options={{
                headerTitle: 'Adicionar',
                headerTitleAlign: 'center',
                headerTitleStyle: { fontWeight: 'bold' },
                headerTransparent: true,
                headerTintColor: 'rgba(255, 255, 255, 0.87)',
              }}
              name="Register"
              component={Register}
            />
            <Stack.Screen
              options={{
                headerTitle: '',
                headerTransparent: true,
                headerTintColor: '#FFF',
              }}
              name="Note"
              component={Note}
            />
            <Stack.Screen
              options={{
                headerTitle: '',
                headerTransparent: true,
                headerTintColor: '#fff',
              }}
              name="Profile"
              component={Profile}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
