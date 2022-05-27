import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import AudioProvider from './src/context/AudioProvider';
import color from './src/misc/color';

// import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// import firebase from 'firebase';
// import firebaseConfig from './config';
// firebase.initializeApp(firebaseConfig);

// import LoadingScreen from './src/auth/LoadingScreen';
// import LoginScreen from './src/auth/LoginScreen';
// import DashboardScreen from './src/auth/DashboardScreen';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: color.APP_BG,
  },
};

// const AppAuthencationSwitchNavgator = createSwitchNavigator({
//   LoadingScreen:LoadingScreen,
//   LoginScreen:LoginScreen,
//   DashboardScreen:DashboardScreen
// })
// const AppAuthencationNavigator = createAppContainer(AppAuthencationSwitchNavgator);

export default function App() {
  
  return (
    // <AppAuthencationNavigator></AppAuthencationNavigator>
    <AudioProvider>
      <NavigationContainer theme={MyTheme}>
        <AppNavigator />
      </NavigationContainer>
    </AudioProvider>
  );
}
