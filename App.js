
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';

import EnterPage from './components/EnterPage';
import LoginPage from './components/LoginPage';
import JoinPage from './components/JoinPage';
import MainPage from './components/MainPage';
import HistoryPage from './components/History';

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
      <Tab.Screen name='TODAY' component={MainPage} />
      <Tab.Screen name='HISTORY' component={HistoryPage} />
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

// 4. Moment
// npm install moment

// -. react-window  (RN 에서 사용하지 않음. DOM기반으로 웹에서만 사용)
// 대체, RN "FlatList" ,"SectionList" , "RecyclerListView"
// SectionList는 기능이 다르다고 함

// FlatList - 간편, 정보많음, 데이터많아도 성능 괜츈 / 리스트가 길면 복잡해짐, 단순한 가상화 기능만 있음.
// RecyclerListView - 많은리스트사용시 성능좋음, 기능많음, 리스트관리 용이 / 설정 복잡, API 사용이 어려움
