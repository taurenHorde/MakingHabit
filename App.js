
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/Store';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import EnterPage from './components/EnterPage';
import LoginPage from './components/LoginPage';
import JoinPage from './components/JoinPage';
import MainPage from './components/MainPage';
import HistoryPage from './components/History';
import MyPage from './components/MyPage';
import HabitPage from './components/inMyPage/HabitPage';
import MakeHabitPage from './components/inMyPage/MakeHabitPage';
import EditProfilePage from './components/inMyPage/EditProfilePage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

function UnderTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='메인'
      screenOptions={{
        animation: 'fade',
        headerShown: false
      }}
    >
      <Tab.Screen name='메인' component={MainPage} />
      <Tab.Screen name='달력' component={HistoryPage} />
      <Tab.Screen name='내정보' component={MyPageStack}>
      </Tab.Screen>

    </Tab.Navigator>
  )
}

function MyPageStack() {
  return (
    <Stack.Navigator
      initialRouteName='MyPage'
      screenOptions={{
        animation: 'fade',
        headerShown: false
      }}
    >
      <Stack.Screen
        name="MyPage"
        component={MyPage}
      />
      <Stack.Screen
        name="HabitPage"
        component={HabitPage} // 습관 생성/변경/삭제 페이지
      />
      <Stack.Screen
        name="MakeHabitPage"
        component={MakeHabitPage} // 습관 생성 페이지
      />

      <Stack.Screen
        name="EditProfilePage"
        component={EditProfilePage} // 습관 생성 페이지
      />

    </Stack.Navigator>
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
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
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
        </Provider>
      </QueryClientProvider>
    )
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

// 5.FlatList - 간편, 정보많음, 데이터많아도 성능 괜츈 / 리스트가 길면 복잡해짐, 단순한 가상화 기능만 있음. - 사용
// RecyclerListView - 많은리스트사용시 성능좋음, 기능많음, 리스트관리 용이 / 설정 복잡, API 사용이 어려움

// 6. redux-toolkit 
// index.js 가 없다. Expo는 엔트리포인트가 App.js라고 해서 여기에 적용,

// 7. datetimepicker (https://github.com/react-native-datetimepicker/datetimepicker)
// npm install @react-native-community/datetimepicker --save
// 추천하는 Android 사용 방법이 있지만, Ios/Android 둘다 적용되는 방법으로 사용할 예정;

/// 8. npm install @tanstack/react-query
/// 9. npm install axios
/// 10. npm install joi