

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { darkTheme, lightTheme } from '../theme/color';
import { fontTheme } from '../theme/font';




export default function MyPage({ navigation }) {

  const clickToHabit = () => navigation.navigate('HabitPage');
  const clickToEditProfile = () => navigation.navigate('EditProfilePage');

  return (
    <View style={styles.myPageWrap}>
      <View style={styles.myPageHead}>
        <Text style={styles.myPageTitle}>정예타우렌족장님의 Mypage</Text>
      </View>
      <View style={styles.myPageBody}>

        <TouchableOpacity
          style={styles.myPageMenuBox}
          onPress={clickToHabit}
        >
          <Text style={styles.myPageMenuText}>
            습관 생성/변경/삭제
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.myPageMenuBox}
          onPress={clickToEditProfile}
        >
          <Text style={styles.myPageMenuText}>
            회원정보 수정
          </Text>
        </TouchableOpacity>

      </View>
      <View style={styles.myPageFooter}></View>
    </View >
  );
}

const styles = StyleSheet.create({
  myPageWrap: {
    flex: 1,
    backgroundColor: darkTheme.bg,
  },
  myPageHead: {
    flexBasis: "15%",
    flexShrink: 0,
    justifyContent: 'flex-end',
    borderBottomWidth: 1
  },
  myPageTitle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    lineHeight: 30,
    color: darkTheme.color,
    fontFamily: fontTheme.noto600
  },
  myPageBody: {
    flexGrow: 1,
    flexShrink: 1,
    padding: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  myPageMenuBox: {
    paddingHorizontal: 20,
    marginVertical: 5,
    width: '100%',
    minHeight: 60,
    backgroundColor: 'rgba(245, 245, 245, 0.5)',
    justifyContent: 'center',
    borderRadius: 15
  },
  myPageMenuText: {
    fontSize: 15,
  },
  myPageFooter: {
    flexGrow: 1,
    flexShrink: 1
  },
});
