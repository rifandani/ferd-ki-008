import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import HomeBottomTab from './HomeBottomTab';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const Navigation = ({ colorScheme }) => {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator initialRouteName="HomeBottomTab">
        <Stack.Group
          screenOptions={{ headerStyle: { backgroundColor: 'azure' } }}
        >
          <Stack.Screen
            name="HomeBottomTab"
            component={HomeBottomTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

// // share common screenOptions between the Groups
// // override Group options by passing options to each Screen component
// {isLoggedIn ? (
//   // Screens for logged in users
//   <Stack.Group>
//     <Stack.Screen name="Home" component={Home} />
//     <Stack.Screen name="Profile" component={Profile} />
//   </Stack.Group>
// ) : (
//   // Auth screens
//   <Stack.Group screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="SignIn" component={SignIn} />
//     <Stack.Screen name="SignUp" component={SignUp} />
//   </Stack.Group>
// )}
//   // Common modal presentations
// <Stack.Group screenOptions={{ presentation: 'modal' }}>
//   <Stack.Screen name="CreatePost" component={CreatePostScreen} />
// </Stack.Group>
