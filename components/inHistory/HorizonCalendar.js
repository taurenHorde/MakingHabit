
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { darkTheme, lightTheme } from '../../theme/color';
import { fontTheme } from '../../theme/font';
import moment from 'moment';
import 'moment/locale/ko'
moment.locale('ko')



const Item = ({ item, index, onPress, color, borderBottomWidth, borderBottomColor, width, marginHorizontal }) => {

  const dd = moment(item).format('dd')
  const DD = moment(item).format('DD')

  return (
    <TouchableOpacity
      style={[styles.dateListView, { borderBottomWidth, borderBottomColor, width, marginHorizontal }]}
      onPress={onPress}
    >
      <Text style={[styles.dateListDay, { color }]}>{DD}</Text>
      <Text style={[styles.dateListDate, { color }]}>{dd}</Text>
    </TouchableOpacity>
  )
}

export default function HorizonCalendarPage({ navigation }) {

  const screenWidth = Dimensions.get('window').width;
  const [dateList, setDateList] = useState([]);
  const [earliestDate, setEarliestDate] = useState(moment());
  const [selectDate, setSelectDate] = useState();
  const [firstLoadingCheck, setFirstLoadingCheck] = useState(false)

  useEffect(() => {
    if (firstLoadingCheck) return;
    const firstBringToDate = async () => {
      setSelectDate(moment().add(-1, 'days'))
      const result = await bringTodate();
      if (result) setFirstLoadingCheck(true)
    }
    firstBringToDate();
  }, [])

  const bringTodate = async () => {
    const dateCount = -14 // 2주치
    const dateArr = [];
    let earliest;
    for (let i = dateCount; i < 0; i++) {
      const d = moment(earliestDate).add(i, 'days')
      dateArr.push(d)
      if (i === -14) earliest = moment(earliestDate).add(i, 'days');
    }
    setDateList(pre => [...dateArr, ...pre])
    setEarliestDate(earliest)
    return true;
  }


  const renderItem = ({ item, index }) => {

    const { color, borderBottomWidth, borderBottomColor } = moment(item).isSame(moment(selectDate), 'day')
      ? { color: darkTheme.color, borderBottomWidth: 3, borderBottomColor: 'white' }
      : { color: 'gray', borderBottomWidth: 0, borderBottomColor: 'transparent' };

    const width = screenWidth / 8
    const marginHorizontal = (screenWidth / 8) / 14
    return (
      <Item
        item={item}
        index={index}
        onPress={() => {
          console.log(item)
          setSelectDate(item)
        }}
        color={color}
        borderBottomWidth={borderBottomWidth}
        borderBottomColor={borderBottomColor}
        width={width}
        marginHorizontal={marginHorizontal}
      />
    )
  }


  if (!firstLoadingCheck) return <></>
  if (firstLoadingCheck) return (
    <SafeAreaView style={styles.HorizonCalendarWrap}>
      <FlatList
        data={dateList}
        horizontal
        windowSize={Infinity}
        renderItem={renderItem}
        extraData={selectDate}
        getItemLayout={(data, index) => {
          return { length: screenWidth / 7, offset: (screenWidth / 7) * index, index }
        }}
        initialScrollIndex={dateList.length - 1}
        // 아래는 FlatList 내 속성이 아닌 안드로이드 및 IOS 내 설정
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  HorizonCalendarWrap: {
    flex: 1,
    backgroundColor: darkTheme.bg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateListView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateListDay: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: fontTheme.noto300,
  },
  dateListDate: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: fontTheme.noto500,
  }
});
