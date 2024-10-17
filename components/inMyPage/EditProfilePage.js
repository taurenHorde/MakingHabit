import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, SafeAreaView, Button } from 'react-native';
import { darkTheme, lightTheme } from '../../theme/color';
import { fontTheme } from '../../theme/font';


export default function EditProfilePage({ navigation }) {

  return (
    <View style={styles.editProfilePageWrap}>
      <View style={styles.editProfilePageHead}>
        <Text style={styles.editProfilePagePreBut}>앞{/* 나중에 화살표로 바꾸기 */}</Text>
        <Text style={styles.editProfilePageTitle}>회원 정보 수정</Text>
      </View>
      <View style={styles.editProfilePageBody}>

        
      </View>
      <View style={styles.editProfilePageFooter}></View>
    </View >
  );
}

const styles = StyleSheet.create({
  editProfilePageWrap: {
    flex: 1,
    backgroundColor: darkTheme.bg,
  },
  editProfilePageHead: {
    flexBasis: "15%",
    flexShrink: 0,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  editProfilePagePreBut: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    lineHeight: 30,
    color: darkTheme.color,
    fontFamily: fontTheme.noto600
  },
  editProfilePageTitle: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    fontSize: 20,
    lineHeight: 30,
    color: darkTheme.color,
    fontFamily: fontTheme.noto600
  },
});
