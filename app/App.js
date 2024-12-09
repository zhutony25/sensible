// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';

// Import screens
import WelcomePage from './frontend/WelcomePage';
import LoginPage from './frontend/LoginPage';
import SignupPage from './frontend/SignupPage';
import HomePage from './frontend/HomePage';
import DataPage from './frontend/DataPage';
import LeftFootDataPage from './frontend/LeftFootDataPage';
import RightFootDataPage from './frontend/RightFootDataPage';
import InstructionsPage from './frontend/InstructionsPage';
import TestPage from './frontend/TestPage';
import EndTestPage from './frontend/EndTestPage';

const Stack = createStackNavigator();
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Data"
          component={DataPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LeftFootData"
          component={LeftFootDataPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RightFootData"
          component={RightFootDataPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Instructions"
          component={InstructionsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Test"
          component={TestPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EndTest"
          component={EndTestPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
