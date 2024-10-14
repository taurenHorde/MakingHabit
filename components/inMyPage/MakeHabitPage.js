import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, SafeAreaView, Button } from 'react-native';
import { darkTheme, lightTheme } from '../../theme/color';
import { fontTheme } from '../../theme/font';
import DateTimePicker from '@react-native-community/datetimepicker';
import Checkbox from 'expo-checkbox';
import moment from 'moment';


export default function MakeHabitPage({ navigation }) {

  const [name, setName] = useState('')
  const onChangeName = (event) => setName(event)

  const [date1, setDate1] = useState(new Date())
  const [show1, setShow1] = useState(false)

  const [date2, setDate2] = useState(new Date())
  const [show2, setShow2] = useState(false)

  const [selectMode, setSelectMode] = useState(false)
  const [days, setDays] = useState([false, false, false, false, false, false, false]) // 일요일 ~ 토요일 순


  const onChangeDate1 = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow1(false);
    setDate1(currentDate);
  }

  const onChangeDate2 = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow2(false);
    setDate2(currentDate);
  }

  const daySelectMode = () => setSelectMode(true)
  const onChangeDay = (idx) => {
    if (!selectMode) return;
    setDays(preDays => preDays.map((d, i) => i === idx ? !d : d))
  }
  const onChangeDays = (type) => {
    setSelectMode(false)
    setDays(type ? [false, true, true, true, true, true, false] : [true, false, false, false, false, false, true])
  }

  const showMode1 = () => setShow1(true)
  const showMode2 = () => setShow2(true)

  const dateText1 = moment(date1).format("YY-MM-DD")
  const dateText2 = moment(date2).format("YY-MM-DD")
  const dateDiff = moment(date2).diff(date1, 'days')


  return (
    <View style={styles.makeHabitPageWrap}>
      <View style={styles.makeHabitPageHead}>
        <Text style={styles.makeHabitPagePreBut}>앞{/* 나중에 화살표로 바꾸기 */}</Text>
        <Text style={styles.makeHabitPageTitle}>습관 목표 생성</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.makeHabitPageBody}
      >

        <View style={styles.makeHabitPageInputBox}>
          <Text style={styles.makeHabitPageInputText}>습관 목표</Text>
          <TextInput
            style={styles.makeHabitPageInputTextInput}
            onChangeText={onChangeName}
            value={name}
            color={darkTheme.bg}
          />
        </View>

        <View style={styles.makeHabitPageInputBox}>
          <Text style={styles.makeHabitPageInputText}>기간 설정</Text>
          <SafeAreaView>
            <View style={styles.makeHabitPageInputButton}>
              <Button
                onPress={showMode1}
                title="시작 일자"
              />
            </View>
            <View style={styles.makeHabitPageInputButton}>
              <Button
                style={styles.makeHabitPageInputButton}
                onPress={showMode2}
                title="종료 일자"
              />
            </View>
            {show1 && (
              <DateTimePicker
                testID="datePicker"
                value={date1}
                mode="date"
                onChange={onChangeDate1}
              />
            )}
            {show2 && (
              <DateTimePicker
                testID="datePicker"
                value={date2}
                mode="date"
                onChange={onChangeDate2}
              />
            )}
          </SafeAreaView>
          <Text style={styles.makeHabitPageInputTextInfo}>
            기간: {dateText1} ~ {dateText2} ({dateDiff}일간)
          </Text>
        </View>

        <View style={styles.makeHabitPageInputBox}>
          <Text style={styles.makeHabitPageInputText}
            onPress={() => console.log(days)}
          >요일 설정</Text>
          <View style={styles.makeHabitPageInputDayBox}>
            <View style={styles.makeHabitPageInputDay}>
              <TouchableOpacity
                style={styles.makeHabitPageInputDayTouchableOpacity}
                onPress={() => onChangeDays(true)}
              >
                <Text style={styles.makeHabitPageInputButtonText}>
                  주중
                </Text>
                <Text style={styles.makeHabitPageInputButtonText}>
                  월 ~ 금
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.makeHabitPageInputDayTouchableOpacity}
                onPress={() => onChangeDays(false)}
              >
                <Text style={styles.makeHabitPageInputButtonText}>
                  주말
                </Text>
                <Text style={styles.makeHabitPageInputButtonText}>
                  토 ~ 일
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.makeHabitPageInputDayTouchableOpacity}
                onPress={daySelectMode}
              >
                <Text style={styles.makeHabitPageInputButtonText}>
                  직접선택
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ ...styles.makeHabitPageInputDay, marginTop: 20 }}>
              {['일', '월', '화', '수', '목', '금', '토'].map((val, idx) => (
                <View style={styles.makeHabitPageInputDayCheck} key={val}>
                  <Checkbox
                    style={styles.makeHabitPageInputDayCheckBox}
                    value={days[idx]}
                    onValueChange={() => onChangeDay(idx)}
                  />
                  <Text
                    style={{
                      ...styles.makeHabitPageInputDayCheckText,
                      color: idx === 0 ? 'pink' : idx === 6 ? 'skyblue' : 'white'
                    }}>
                    {val}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>


      </ScrollView>
      <View style={styles.makeHabitPageFooter}></View>
    </View >
  );
}

// DateTimePicker 하나로  2개의 데이터 구분 방법을 몰라 일단
// 두 개의 DateTimePicker 로 구분
// 나중에 방법을 찾으면 합치거나 할 예정 - 

const styles = StyleSheet.create({
  makeHabitPageWrap: {
    flex: 1,
    backgroundColor: darkTheme.bg,
  },
  makeHabitPageHead: {
    flexBasis: "15%",
    flexShrink: 0,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  makeHabitPagePreBut: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    lineHeight: 30,
    color: darkTheme.color,
    fontFamily: fontTheme.noto600
  },
  makeHabitPageTitle: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    fontSize: 20,
    lineHeight: 30,
    color: darkTheme.color,
    fontFamily: fontTheme.noto600
  },
  makeHabitPageBody: {
    flexGrow: 1,
    flexShrink: 0,
    padding: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  makeHabitPageInputBox: {
    width: '98%',
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  makeHabitPageInputText: {
    fontSize: 15,
    lineHeight: 30, //나중에 
    fontFamily: fontTheme.noto600,
    color: 'white' // 나중에
  },
  makeHabitPageInputTextInfo: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: fontTheme.noto300,
    color: 'white'
  },
  makeHabitPageInputTextInput: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  makeHabitPageInputButton: {
    marginBottom: 10
  },
  // 아래부터 요일
  makeHabitPageInputDayBox: {

  },
  makeHabitPageInputDay: {
    flexDirection: 'row'
  },
  // 아래부터 요일(버튼)
  makeHabitPageInputDayTouchableOpacity: {
    flexGrow: 1,
    flexShrink: 1,
    marginHorizontal: 5,
    backgroundColor: '#2196F3',
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  makeHabitPageInputButtonText: {
    color: 'white'
  },
  // 아래부터 요일(체크박스)
  makeHabitPageInputDayCheck: {
    flexGrow: 1,
    flexShrink: 1,
    alignItems: 'center'
  },
  makeHabitPageInputDayCheckBox: {

  },
  makeHabitPageInputDayCheckText: {
    marginTop: 5
  },
  makeHabitPageFooter: {
    flexGrow: 0,
    flexShrink: 0
  },
});
