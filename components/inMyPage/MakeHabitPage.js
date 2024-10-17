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

  const [goal, setGoal] = useState('')
  const onChangeGoal = (event) => setGoal(event)

  const [date1, setDate1] = useState(new Date()) // start // today
  const [show1, setShow1] = useState(false) // DateTimePicker Display 변화용
  const [hasDate1, setHasDate1] = useState(false) // 날짜 선택 확인용

  const [date2, setDate2] = useState(new Date()) // end
  const [show2, setShow2] = useState(false) // DateTimePicker Display 변화용
  const [hasDate2, setHasDate2] = useState(false) // 날짜 선택 확인용

  const [selectMode, setSelectMode] = useState(false)
  const [selectedDayBut, setSelectedDayBut] = useState(0); // 순서대로 / style 변화용
  const [days, setDays] = useState([false, false, false, false, false, false, false]) // 일요일 ~ 토요일 순

  const [access, setAccess] = useState(0)



  const onChangeDate1 = (event, selectedDate) => {
    setShow1(false);
    const currentDate = selectedDate;
    if (event.type === 'set' && selectedDate) {
      setDate1(currentDate);
      setHasDate1(true)
    }
  }

  const onChangeDate2 = (event, selectedDate) => {
    setShow2(false);
    const currentDate = selectedDate;
    if (event.type === 'set' && selectedDate) {
      setDate2(currentDate);
      setHasDate2(true)
    }
  }

  const daySelectMode = () => {
    setSelectMode(true)
    setSelectedDayBut(3)
  }
  const onChangeDay = (idx) => {
    if (!selectMode) return;
    setDays(preDays => preDays.map((d, i) => i === idx ? !d : d))
  }
  const onChangeDays = (type) => {
    setSelectMode(false)
    setDays(type ? [false, true, true, true, true, true, false] : [true, false, false, false, false, false, true])
    setSelectedDayBut(type ? 1 : 2)
  }
  const onChangeAccess = (type) => setAccess(type)

  const showMode1 = () => setShow1(true)
  const showMode2 = () => setShow2(true)


  const DateText = () => {
    let text;
    let textColor = 'white'
    if (!hasDate1 && !hasDate2) text = '시작 일자와 종료 일자를 설정해 주세요.'
    if (!hasDate1 && hasDate2) text = '시작 일자를 설정해 주세요.'
    if (hasDate1 && !hasDate2) text = '종료 일자를 설정해 주세요.'
    if (hasDate1 && hasDate2) {
      if (moment(date2).diff(date1, 'days') <= 0) {
        text = '종료 일자가 시작 일자와 같거나 보다 빠릅니다.'
        textColor = 'red'
      } else {
        text = `기간 : ${moment(date1).format("YY-MM-DD")} ~ ${moment(date2).format("YY-MM-DD")} (${moment(date2).diff(date1, 'days')}일간)`
      }
    }
    return <Text style={{
      ...styles.makeHabitPageInputTextInfo,
      color: textColor
    }}
    >
      {text}
    </Text>
  }


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
          <Text style={styles.makeHabitPageInputText}>제목</Text>
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
            <View style={styles.makeHabitPageInputButBox}>
              <View style={styles.makeHabitPageInputButton}>
                <Button
                  color={hasDate1 ? '#2196F3' : 'gray'}
                  onPress={showMode1}
                  title="시작 일자"
                />
              </View>
              <View style={{ width: 20 }} />
              <View style={styles.makeHabitPageInputButton}>
                <Button
                  color={hasDate2 ? '#2196F3' : 'gray'}
                  onPress={showMode2}
                  title="종료 일자"
                />
              </View>
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
          <DateText />
        </View>

        <View style={styles.makeHabitPageInputBox}>
          <Text style={styles.makeHabitPageInputText}
            onPress={() => console.log(days)}
          >요일 설정</Text>
          <View style={styles.makeHabitPageInputDayBox}>
            <View style={styles.makeHabitPageInputDay}>
              <TouchableOpacity
                style={{
                  ...styles.makeHabitPageInputDayTouchableOpacity,
                  backgroundColor: selectedDayBut === 1 ? '#2196F3' : 'gray'
                }}
                onPress={() => onChangeDays(true)}
              >
                <Text style={styles.makeHabitPageInputButtonText}>
                  주중
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.makeHabitPageInputDayTouchableOpacity,
                  backgroundColor: selectedDayBut === 2 ? '#2196F3' : 'gray',
                  marginHorizontal: 10,
                }}
                onPress={() => onChangeDays(false)}
              >
                <Text style={styles.makeHabitPageInputButtonText}>
                  주말
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.makeHabitPageInputDayTouchableOpacity,
                  backgroundColor: selectedDayBut === 3 ? '#2196F3' : 'gray'
                }}
                onPress={daySelectMode}
              >
                <Text style={styles.makeHabitPageInputButtonText}>
                  직접선택
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{
              ...styles.makeHabitPageInputDay,
              marginTop: 15
            }}
            >
              {['일', '월', '화', '수', '목', '금', '토'].map((val, idx) => (
                <TouchableOpacity
                  key={val}
                  style={styles.makeHabitPageInputDayCheck}
                  onPress={() => onChangeDay(idx)}
                >
                  <Checkbox
                    style={{
                      ...styles.makeHabitPageInputDayCheckBox,
                      borderColor: !selectMode ? 'gray' :
                        idx === 0 ? 'pink' : idx === 6 ? 'skyblue' : 'white'
                    }}
                    value={days[idx]}
                    onValueChange={() => onChangeDay(idx)}
                  />
                  <Text
                    style={{
                      ...styles.makeHabitPageInputDayCheckText,
                      color: !selectMode ? 'gray' :
                        idx === 0 ? 'pink' : idx === 6 ? 'skyblue' : 'white'
                    }}>
                    {val}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.makeHabitPageInputBox}>
          <Text style={styles.makeHabitPageInputText}>목표</Text>
          <TextInput
            style={styles.makeHabitPageInputTextInput}
            onChangeText={onChangeGoal}
            value={goal}
            editable
            multiline
            numberOfLines={4}
          />
        </View>
        <View style={styles.makeHabitPageInputBox}>
          <Text style={styles.makeHabitPageInputText}>공개 여부</Text>
          <View style={styles.makeHabitPageAccessBox}>
            <TouchableOpacity
              style={{
                ...styles.makeHabitPageAccessTouchableOpacity,
                backgroundColor: access === 0 ? '#2196F3' : 'gray'
              }}
              onPress={() => onChangeAccess(0)}
            >
              <Text style={styles.makeHabitPageAccessButtonText}>
                전체 공개
              </Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={{
                ...styles.makeHabitPageAccessTouchableOpacity,
                backgroundColor: access === 1 ? '#2196F3' : 'gray',
                marginHorizontal: 10
              }}
              onPress={() => onChangeAccess(1)}
            >
              <Text style={styles.makeHabitPageAccessButtonText}>
                친구 공개
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                ...styles.makeHabitPageAccessTouchableOpacity,
                backgroundColor: access === 2 ? '#2196F3' : 'gray'
              }}
              onPress={() => onChangeAccess(2)}
            >
              <Text style={styles.makeHabitPageAccessButtonText}>
                비공개
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.makeHabitPageInputBox}>
          <View style={styles.makeHabitPageSubmitBox}>
            <TouchableOpacity
              style={{
                ...styles.makeHabitPageSubmitTouchableOpacity,
                backgroundColor: 'gray',
              }}
              onPress={() => console.log('취소')}
            >
              <Text style={styles.makeHabitPageSubmitButtonText}>
                취소
              </Text>
            </TouchableOpacity>
            <View style={{ marginHorizontal: 10 }} />
            <TouchableOpacity
              style={{
                ...styles.makeHabitPageSubmitTouchableOpacity,
                backgroundColor: '#2196F3'
              }}
              onPress={() => console.log('생성')}
            >
              <Text style={styles.makeHabitPageSubmitButtonText}>
                생성
              </Text>
            </TouchableOpacity>
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
    fontSize: 12,
    lineHeight: 20,
    fontFamily: fontTheme.noto300
  },
  makeHabitPageInputTextInput: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  makeHabitPageInputButBox: {
    flexDirection: 'row'
  },
  makeHabitPageInputButton: {
    marginBottom: 10,
    flex: 1,
  },
  // 아래부터 요일
  makeHabitPageInputDayBox: {
    // 요일 설정 view 2가지
  },
  makeHabitPageInputDay: {
    flexDirection: 'row',
  },
  // 아래부터 요일(버튼)
  makeHabitPageInputDayTouchableOpacity: {
    flexGrow: 1,
    flexShrink: 1,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  makeHabitPageInputButtonText: {
    color: 'white'
  },
  // 아래부터 요일(체크박스)
  makeHabitPageInputDayCheck: {
    flexGrow: 1,
    flexShrink: 1,
    alignItems: 'center',
  },
  makeHabitPageInputDayCheckBox: {
    // checkBox styled
  },
  makeHabitPageInputDayCheckText: {
    marginTop: 5
  },
  // 아래부터 공개여부
  makeHabitPageAccessBox: {
    flexDirection: 'row',
  },
  makeHabitPageAccessTouchableOpacity: {
    flexGrow: 1,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  makeHabitPageAccessButtonText: {
    color: 'white'
  },
  makeHabitPageSubmitBox: {
    flexDirection: 'row',
    marginTop: 50
  },
  makeHabitPageSubmitTouchableOpacity: {
    flexGrow: 1,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  makeHabitPageSubmitButtonText: {
    color: 'white'
  },
  makeHabitPageFooter: {
    flexGrow: 0,
    flexShrink: 0
  },
});
