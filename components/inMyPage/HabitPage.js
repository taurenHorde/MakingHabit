
import { StyleSheet, Text, View, } from 'react-native';
import { darkTheme, lightTheme } from '../../theme/color';
import { fontTheme } from '../../theme/font';



export default function HabitPage({ navigation }) {


  return (
    <View style={styles.HabitPageWrap}>
      <View style={styles.HabitPageHead}>
        <Text style={styles.HabitPageTitle}>정예타우렌족장님의 HabitPage</Text>
      </View>
      <View style={styles.HabitPageBody}>

        <View style={styles.HabitPageMenuBox}>
          <Text style={styles.HabitPageMenuText}>
            습관 생성/변경/삭제
          </Text>
        </View>
        <View style={styles.HabitPageMenuBox}>
          <Text style={styles.HabitPageMenuText}>
            회원정보 수정
          </Text>
        </View>

      </View>
      <View style={styles.HabitPageFooter}></View>
    </View >
  );
}

const styles = StyleSheet.create({
  HabitPageWrap: {
    flex: 1,
    backgroundColor: darkTheme.bg,
  },
  HabitPageHead: {
    flexBasis: "15%",
    flexShrink: 0,
    justifyContent: 'flex-end',
    borderBottomWidth: 1
  },
  HabitPageTitle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    lineHeight: 30,
    color: darkTheme.color,
    fontFamily: fontTheme.noto600
  },
  HabitPageBody: {
    flexGrow: 1,
    flexShrink: 1,
    padding: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  HabitPageMenuBox: {
    paddingHorizontal: 20,
    marginVertical: 5,
    width: '100%',
    minHeight: 60,
    backgroundColor: 'rgba(245, 245, 245, 0.5)',
    justifyContent: 'center',
    borderRadius: 15
  },
  HabitPageMenuText: {
    fontSize: 15,
  },
  HabitPageFooter: {
    flexGrow: 1,
    flexShrink: 1
  },
});
