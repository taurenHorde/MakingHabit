import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Modal } from 'react-native';
import { darkTheme, lightTheme } from '../../theme/color';
import { fontTheme } from '../../theme/font';


export default function EditProfilePage({ navigation }) {

  const [nnModal, setNnModal] = useState(false)
  const [pwModal, setPwModal] = useState(false)

  const [editNn, setEditNn] = useState('')
  const onChangeEditNickname = (event) => setEditNn(event)
  const [editPw1, setEditPw1] = useState('')
  const [editPw2, setEditPw2] = useState('')

  return (
    <View style={styles.editProfilePageWrap}>
      <View style={styles.editProfilePageHead}>
        <Text style={styles.editProfilePagePreBut}>앞{/* 나중에 화살표로 바꾸기 */}</Text>
        <Text style={styles.editProfilePageTitle}>회원 정보 수정</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.editProfilePageBody}
      >
        <View
          style={styles.editProfilePageUserInfo}
          testID='id'
        >
          <Text style={styles.editProfilePageUserInfoText}>
            아이디
          </Text>
          <Text style={styles.editProfilePageUserInfoText}>
            Id50078830
          </Text>
        </View>
        <View
          style={styles.editProfilePageUserInfo}
          testID='nickname'
        >
          <Text style={styles.editProfilePageUserInfoText}>
            닉네임
          </Text>
          <Text style={styles.editProfilePageUserInfoText}>
            이번엔꼭성공한다
          </Text>
        </View>
        <View
          style={styles.editProfilePageUserInfo}
          testID='joinDate'
        >
          <Text style={styles.editProfilePageUserInfoText}>
            가입일
          </Text>
          <Text style={styles.editProfilePageUserInfoText}>
            24-10-20
          </Text>
        </View>
        <View style={styles.editProfilePageUserButBox}>
          <TouchableOpacity
            style={styles.editProfilePageUserBut}
            testID='editNickname'
            onPress={() => setNnModal(true)}
          >
            <Text style={styles.editProfilePageUserButText}>닉네임 변경</Text>
          </TouchableOpacity>
          <View style={{ marginHorizontal: 10 }} />
          {/* <TouchableOpacity
            style={styles.editProfilePageUserBut}
            testID='editPassword'
          >
            <Text style={styles.editProfilePageUserButText}>비밀번호 변경</Text>
          </TouchableOpacity> */}
        </View>


      </ScrollView>
      <View style={styles.editProfilePageFooter}></View>
      <Modal
        animationType='fade'
        transparent={true}
        visible={nnModal}
        onRequestClose={() => setNnModal(false)}
      >
        <View style={styles.editProfilePageModalWrap}>
          <View style={styles.editProfilePageModalBox}>
            <Text style={styles.editProfilePageModalText}>
              닉네임 변경
            </Text>
            <View style={styles.editProfilePageModalInputBox}>
              <TextInput
                style={styles.editProfilePageModalInput}
                onChangeText={onChangeEditNickname}
                value={editNn}
                color={darkTheme.bg}
              />
            </View>
            <View style={styles.editProfilePageModalButBox}>
              <TouchableOpacity
                style={styles.editProfilePageModalBut}
                onPress={() => {
                  setEditNn('')
                  setNnModal(false)
                }}
              >
                <Text style={styles.editProfilePageUserButText}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.editProfilePageModalBut}>
                <Text style={styles.editProfilePageUserButText}>변경</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  editProfilePageBody: {
    flexGrow: 1,
    flexShrink: 0,
    padding: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  editProfilePageUserInfo: {
    width: '98%',
    minHeight: 10,
    paddingVertical: 15,
    marginBottom: 10,
    flexDirection: 'row'
  },
  editProfilePageUserInfoText: {
    flex: 1,
    fontSize: 15,
    fontFamily: fontTheme.noto600,
    lineHeight: 20,
    color: 'white',
    paddingHorizontal: 5
  },
  editProfilePageUserButBox: {
    width: '98%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
  },
  editProfilePageUserBut: {
    flex: 1,
    minHeight: 20,
    paddingVertical: 15,
    backgroundColor: 'red',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 245, 245, 0.5)',
    borderRadius: 10
  },
  editProfilePageUserButText: {
    fontFamily: fontTheme.noto500,
    lineHeight: 20
  },
  // 모달 관련
  editProfilePageModalWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  editProfilePageModalBox: {
    width: '80%',
    backgroundColor: 'rgb(200, 200, 200)',
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  editProfilePageModalText: {
    fontSize: 18,
    fontFamily: fontTheme.noto600,
    lineHeight: 25
  },
  editProfilePageModalInputBox: {
    width: '98%',
    paddingVertical: 20,
    alignItems: 'center'
  },
  editProfilePageModalInput: {
    width: '90%',
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10
  },
  editProfilePageModalButBox: {
    width: '98%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  editProfilePageModalBut: {
    // 안 text 는 다른 곳에서 가져와서 적용
    paddingHorizontal: 40,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  }
});
