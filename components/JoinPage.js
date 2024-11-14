
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { darkTheme, lightTheme } from '../theme/color';
import { fontTheme } from '../theme/font';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';
import validateJoin from '../function/validation';
import { alertOneButton, alertOneButtonNavi } from '../function/functions';
import { apiJoinAccount } from './../function/api'
import { useMutation } from '@tanstack/react-query';


export default function JoinPage({ navigation }) {

  const joinMutation = useMutation({
    mutationFn: apiJoinAccount,
    onSuccess: (data) => {
      return alertOneButtonNavi('회원 가입이 완료 되었습니다.', navigation, navigation.replace, 'Login')
    },
    onError: (error) => {
      const status = error.response?.status;
      const errorData = error.response?.data.details;

      if (status === 400) {
        if (errorData.errCode === 1) return alertOneButton("입력 란에 빈 칸 없이 입력해주시길 바랍니다.") // 데이터 누락
        if (errorData.errCode === 2) return alertOneButton(errorData.errResData?.text) // 데이터 검증 오류
        if (errorData.errCode === 3) return alertOneButton(errorData.errResData?.text) // 중복된 데이터
      } else if (status === 500) {
        if (errorData.errCode === 4) return alertOneButton(errorData.errResData?.text) // DB insert 오류
      }
    }
  })


  const [username, setUsername] = useState('');
  const onChangeUsername = (event) => setUsername(event)
  const [nickname, setNickname] = useState('');
  const onChangeNickname = (event) => setNickname(event)
  const [pw1, setPw1] = useState('');
  const onChangePw1 = (event) => setPw1(event)
  const [pw2, setPw2] = useState('');
  const onChangePw2 = (event) => setPw2(event)
  const [checked, setChecked] = useState([false, false, false]);
  const onChangeCheckbox = (idx) => setChecked(preChecked => preChecked.map((c, i) => i === idx ? !c : c))
  const onChangeCheckboxAll = () => checked.includes(false) ? setChecked([true, true, true]) : setChecked([false, false, false])

  const clickToJoin = () => {
    if (username === "" || nickname === "" || pw1 === "" || pw2 === "") return alertOneButton("입력 란에 빈 칸 없이 입력해주시길 바랍니다.");
    if (!checked[0] || !checked[1]) return alertOneButton("필수 항목 체크 해주시길 바랍니다.")
    const joinInputData = {
      username: username,
      nickname: nickname,
      pw1: pw1,
      pw2: pw2
    }
    const validateResult = validateJoin(joinInputData)
    if (validateResult.error) return alertOneButton(validateResult.error.details[0].message)
    return joinMutation.mutate({ ...joinInputData, checkbox: checked })
  }

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
            style={styles.joinPageInputTextInput}
            color={darkTheme.bg}
            onChangeText={onChangeUsername}
            value={username}
            placeholder='글자 수 5 ~ 19 내 영어 / 숫자'
            autoCapitalize='none'
          />
        </View>
        <View style={styles.joinPageInputBox}>
          <Text style={styles.joinPageInputText}>닉네임</Text>
          <TextInput
            style={styles.joinPageInputTextInput}
            color={darkTheme.bg}
            onChangeText={onChangeNickname}
            value={nickname}
            placeholder='글자 수 3 ~ 10 내 한글 / 영어 / 숫자'
            autoCapitalize='none'
          />
        </View>
        <View style={styles.joinPageInputBox}>
          <Text style={styles.joinPageInputText}>비밀번호</Text>
          <TextInput
            style={styles.joinPageInputTextInput}
            color={darkTheme.bg}
            onChangeText={onChangePw1}
            value={pw1}
            placeholder='포트폴리오 편의상 검증 절차 생략하였습니다.'
            secureTextEntry={true}
            autoCapitalize='none'
          />
        </View>
        <View style={styles.joinPageInputBox}>
          <Text style={styles.joinPageInputText}>비밀번호 확인</Text>
          <TextInput
            style={styles.joinPageInputTextInput}
            color={darkTheme.bg}
            onChangeText={onChangePw2}
            value={pw2}
            placeholder='포트폴리오 편의상 검증 절차 생략하였습니다.'
            secureTextEntry={true}
            autoCapitalize='none'
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
              value={!checked.includes(false)}
              onValueChange={onChangeCheckboxAll}
            />
            <Text style={{ ...styles.joinPageCheckText, fontSize: 15, lineHeight: 20 }}> 전체 동의</Text>
          </View>
          <View
            style={styles.joinPageCheckView}>
            <Checkbox
              style={styles.joinPageCheckBox}
              color='white'
              value={checked[0]}
              onValueChange={() => onChangeCheckbox(0)}
            />
            <Text style={{ ...styles.joinPageCheckText, fontSize: 12, lineHeight: 15 }}> 예) 필수항목 </Text>
          </View>
          <View
            style={styles.joinPageCheckView}>
            <Checkbox
              style={styles.joinPageCheckBox}
              color='white'
              value={checked[1]}
              onValueChange={() => onChangeCheckbox(1)}
            />
            <Text style={{ ...styles.joinPageCheckText, fontSize: 12, lineHeight: 15 }}> 예) 필수항목</Text>
          </View>
          <View
            style={styles.joinPageCheckView}>
            <Checkbox
              style={styles.joinPageCheckBox}
              color='white'
              value={checked[2]}
              onValueChange={() => onChangeCheckbox(2)}
            />
            <Text style={{ ...styles.joinPageCheckText, fontSize: 12, lineHeight: 15 }}> 예) 선택항목</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.joinPageButton}
          onPress={clickToJoin}
        >
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
  joinPageInputTextInput: {
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
