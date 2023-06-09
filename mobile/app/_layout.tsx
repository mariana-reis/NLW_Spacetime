import { styled } from "nativewind";
import { ImageBackground } from 'react-native';

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';
import { SplashScreen, Stack } from "expo-router";
import * as SecureStore from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import blurBg from '../src/assets/bg-blur.png';
import Stripes from '../src/assets/stripes.svg';
const StyledStripes = styled(Stripes)


export default function Layout() {
  const [ isUserAuthenticated, setIsUserAuthenticated ] = useState<null | boolean>(null)

  const [hasLoadFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  }) 
  
  useEffect(() => {
    SecureStore.getItemAsync('token').then(token => {
      setIsUserAuthenticated(!!token)
    })
  }, [])
  
  if (!hasLoadFonts) {
    return <SplashScreen />
  }
  
  return (
    <ImageBackground  
     source={blurBg} 
     className="relative bg-gray-900 px-5 flex-1" 
     imageStyle={{ position: 'absolute', left: '-100%' }}
    >
    < StyledStripes className="absolute left-2" />
    <StatusBar style="light" translucent />
    
    <Stack screenOptions={{ 
        headerShown: false, 
        contentStyle: {backgroundColor: 'transparent'},
        animation: 'fade',
      }}
    >
      <Stack.Screen name="index" redirect={isUserAuthenticated} />
      <Stack.Screen name="memories" />
      <Stack.Screen name="new" />
    </Stack>
    </ImageBackground>
  )
}