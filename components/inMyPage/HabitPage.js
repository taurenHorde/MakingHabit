
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { darkTheme, lightTheme } from '../../theme/color';
import { fontTheme } from '../../theme/font';



export default function HabitPage({ navigation }) {

  const clickToMakeHabit = () => navigation.navigate('MAKEHABITPAGE');

  return (
    <View style={styles.habitPageWrap}>
      <View style={styles.habitPageHead}>
        <Text style={styles.habitPagePreBut}>앞{/* 나중에 화살표로 바꾸기 */}</Text>
        <Text style={styles.habitPageTitle}>나의 습관 목표</Text>
      </View>
      <View style={styles.habitPageBody}>

        <TouchableOpacity style={styles.habitPageListBox}>
          <Text style={styles.habitPageListText}>다이어트</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.habitPageListBox}
        onPress={clickToMakeHabit}
        >
          <Text style={styles.habitPageListText}>새로운 습관 만들기</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.habitPageFooter}></View>
    </View >
  );
}

const styles = StyleSheet.create({
  habitPageWrap: {
    flex: 1,
    backgroundColor: darkTheme.bg,
  },
  habitPageHead: {
    flexBasis: "15%",
    flexShrink: 0,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  habitPagePreBut: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    lineHeight: 30,
    color: darkTheme.color,
    fontFamily: fontTheme.noto600
  },
  habitPageTitle: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    fontSize: 20,
    lineHeight: 30,
    color: darkTheme.color,
    fontFamily: fontTheme.noto600
  },
  habitPageBody: {
    flexGrow: 1,
    flexShrink: 1,
    padding: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  habitPageListBox: {
    paddingHorizontal: 20,
    marginVertical: 5,
    width: '100%',
    minHeight: 60,
    backgroundColor: 'rgba(245, 245, 245, 0.5)',
    justifyContent: 'center',
    borderRadius: 15
  },
  habitPageListText: {
    fontSize: 15
  },
  habitPageFooter: {
    flexGrow: 1,
    flexShrink: 1
  },
});
