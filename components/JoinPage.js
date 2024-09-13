
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { darkTheme, lightTheme } from '../theme/color';
import { fontTheme } from '../theme/font';
import Checkbox from 'expo-checkbox';

export default function JoinPage({ navigation }) {

  const clickToEnter = () => navigation.navigate('Enter');

  return (
    <View style={styles.joinPageWrap}>
      <View style={styles.joinPageHead}>
        <Text style={styles.joinPageTitle}>회원가입</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.joinPageBody}
      >
        <View style={styles.joinPageInputBox}>
          <Text style={styles.joinPageInputText}>아이디</Text>
          <TextInput
            style={styles.joinPageInput}
            color={darkTheme.bg}
            placeholder='검증내용'
          />
        </View>
        <View style={styles.joinPageInputBox}>
          <Text style={styles.joinPageInputText}>닉네임</Text>
          <TextInput
            style={styles.joinPageInput}
            color={darkTheme.bg}
            placeholder='검증내용'
          />
        </View>
        <View style={styles.joinPageInputBox}>
          <Text style={styles.joinPageInputText}>비밀번호</Text>
          <TextInput
            style={styles.joinPageInput}
            color={darkTheme.bg}
            placeholder='검증내용'
          />
        </View>
        <View style={styles.joinPageInputBox}>
          <Text style={styles.joinPageInputText}>비밀번호 확인</Text>
          <TextInput
            style={styles.joinPageInput}
            color={darkTheme.bg}
            placeholder='검증내용'
          />
        </View>
        <View style={styles.joinPageCheckWrap}>
          <View
            style={{
              ...styles.joinPageCheckView,
              borderBottomWidth: 1,
              borderBlockColor: 'white',
              paddingBottom: 12,
              borderRadius: 10
            }}>
            <Checkbox
              style={styles.joinPageCheckBox}
              color='white'
            />
            <Text style={{ ...styles.joinPageCheckText, fontSize: 15, lineHeight: 20 }}> 전체 동의</Text>
          </View>
          <View
            style={styles.joinPageCheckView}>
            <Checkbox
              style={styles.joinPageCheckBox}
              color='white'
            />
            <Text style={{ ...styles.joinPageCheckText, fontSize: 12, lineHeight: 15 }}> 약관뭐시기 저시기 뭐시기 저시기</Text>
          </View>
          <View
            style={styles.joinPageCheckView}>
            <Checkbox
              style={styles.joinPageCheckBox}
              color='white'
            />
            <Text style={{ ...styles.joinPageCheckText, fontSize: 12, lineHeight: 15 }}> 약관뭐시기 저시기 뭐시기 저시기</Text>
          </View>
          <View
            style={styles.joinPageCheckView}>
            <Checkbox
              style={styles.joinPageCheckBox}
              color='white'
            />
            <Text style={{ ...styles.joinPageCheckText, fontSize: 12, lineHeight: 15 }}> 약관뭐시기 저시기 뭐시기 저시기</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.joinPageButton}>
          <Text style={styles.joinPageInputButtonText}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.joinPageButton}
          onPress={clickToEnter}
        >
          <Text style={styles.joinPageInputButtonText}>뒤로가기</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.joinPageFooter}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  joinPageWrap: {
    flex: 1,
    backgroundColor: darkTheme.bg,
  },
  joinPageHead: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '15%',
    justifyContent: 'flex-end',
    marginVertical: 20
  },
  joinPageTitle: {
    paddingHorizontal: 20,
    fontSize: 30,
    lineHeight: 35,
    color: darkTheme.color,
    fontFamily: fontTheme.noto600
  },
  joinPageScroll: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  joinPageBody: {
    flexGrow: 2,
    flexShrink: 0,
    backgroundColor: 'gray',
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 40,
  },
  joinPageInputBox: {
    marginVertical: 5,
    paddingVertical: 5,
    width: '85%'
  },
  joinPageInputText: {
    fontSize: 12,
    lineHeight: 15,
    fontFamily: fontTheme.noto700,
    paddingHorizontal: 5,
    marginBottom: 5,
    color: darkTheme.color
  },
  joinPageInput: {
    borderWidth: 1,
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 0,
    backgroundColor: 'white',
    borderRadius: 10
  },
  joinPageCheckWrap: {
    marginVertical: 5,
    paddingVertical: 5,
    width: '85%',
    flexDirection: 'column'
  },
  joinPageCheckView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 2.5,
    paddingVertical: 2.5,
    paddingHorizontal: 10
  },
  joinPageCheckBox: {
    marginRight: 5,
  },
  joinPageCheckText: {
    color: darkTheme.color,
    fontFamily: fontTheme.noto600
  },
  joinPageButton: {
    justifyContent: 'center',
    width: '85%',
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: darkTheme.bg,
    borderRadius: 10,
  },
  joinPageInputButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    lineHeight: 15,
    fontFamily: fontTheme.noto600,
    paddingVertical: 2,
  },
  joinPageFooter: {
    flexGrow: 1,
    flexShrink: 0,
  }

});
