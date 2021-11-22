import React from "react";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium  } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import { Signin } from './src/pages/Signin';
import { ThemeProvider } from 'styled-components'
import { theme } from './src/global/styles/theme';
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background/index'
import { Home } from "./src/pages/Home";
import { Routes } from './src/routes'


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <Background>
     <StatusBar 
        barStyle='light-content'
        backgroundColor= 'transparent'
        translucent={true}
      />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Background>
  )
}   