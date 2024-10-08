

import { StyleSheet, Text, View, } from 'react-native';
import { darkTheme, lightTheme } from '../theme/color';
import { fontTheme } from '../theme/font';




export default function MyPage({ navigation }) {



  return (
    <View style={styles.myPageWrap}>
      <View style={styles.myPageHead}>
        <Text style={styles.myPageTitle}>정예타우렌족장님의 Mypage</Text>
      </View>
      <View style={styles.myPageBody}>

        <View style={styles.myPageMenuBox}>
          <Text style={styles.myPageMenuText}>
            습관 생성/변경/삭제
          </Text>
        </View>
        <View style={styles.myPageMenuBox}>
          <Text style={styles.myPageMenuText}>
            회원정보 수정
          </Text>
        </View>

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
