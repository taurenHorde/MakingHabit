
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';

import { darkTheme } from './theme/color';
import EnterPage from './components/EnterPage';
import LoginPage from './components/LoginPage';
import JoinPage from './components/JoinPage';
import MainPage from './components/MainPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function UnderTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Main'
      screenOptions={{
        animation: 'fade',
        headerShown: false
      }}
    >
      <Tab.Screen name='Main' component={MainPage} />
    </Tab.Navigator>
  )
}

export default function App() {

  const [fontsLoaded] = useFonts({
    'notoSans200': require('./assets/fonts/NotoSansKR-ExtraLight.ttf'),
    'notoSans300': require('./assets/fonts/NotoSansKR-Light.ttf'),
    'notoSans400': require('./assets/fonts/NotoSansKR-Regular.ttf'),
    'notoSans600': require('./assets/fonts/NotoSansKR-SemiBold.ttf'),
    'notoSans700': require('./assets/fonts/NotoSansKR-Bold.ttf'),
  })
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (fontsLoaded) setLoading(false)
  }, [fontsLoaded])


  if (!loading) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Enter'
          screenOptions={{
            animation: 'fade',
            headerShown: false
            // screenOptions 및 transitionSpec 추후에 다시 설정
          }}
        >
          <Stack.Screen
            name="Enter"
            component={EnterPage}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
          />
          <Stack.Screen
            name="Join"
            component={JoinPage}
          />

          <Stack.Screen
            name="Signed"
            // component={MainPage}
            component={UnderTabNavigator}
          />

        </Stack.Navigator>
        {/* <StatusBar backgroundColor='white' /> */}
      </NavigationContainer>
    );
  }
}


// 기록 - 
// 1. React Navigation(https://reactnative.dev/docs/navigation#react-navigation)
// npm install @react-navigation/native @react-navigation/native-stack 
// npx expo install react-native-screens react-native-safe-area-context

// 2. npx expo install expo-font (https://docs.expo.dev/versions/latest/sdk/font/)
// 폰트 다운 후 assets 파일에 넣고 써야함. 
// weight가 적용되지 않아, 분할되서 파일 적용

// 3. bottom-tabs 
// npm install @react-navigation/bottom-tabs