
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { darkTheme, lightTheme } from '../theme/color';
import { fontTheme } from '../theme/font';

import HorizonCalendarPage from './inHistory/HorizonCalendar';


export default function HistoryPage({ navigation }) {

  return (
    <View style={styles.historyPageWrap}>
      <View style={styles.historyPageHead}>
        <View style={styles.historyPageHorizonCalendar}>
          <HorizonCalendarPage />
        </View>
        <View style={styles.historyPageSeletedDate}>
          <Text
            style={{ color: 'white' }}
          >
            _-_ SeletedDate _-_
          </Text>
        </View>
      </View>
      <View style={styles.historyPageBody}></View>
      <View style={styles.historyPageFooter}></View>
    </View >
  );
}

const styles = StyleSheet.create({
  historyPageWrap: {
    flex: 1,
    backgroundColor: darkTheme.bg,
  },
  historyPageHead: {
    flexBasis: "25%",
    flexShrink: 0,
    justifyContent: 'flex-end',
  },
  historyPageHorizonCalendar: {
    height: 60,
  },
  historyPageSeletedDate: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  historyPageBody: {
    flex: 1,
    backgroundColor: 'rgba(100, 184, 138, 0.17)'
  }

});
