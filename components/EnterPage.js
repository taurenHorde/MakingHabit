
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { darkTheme, lightTheme } from '../theme/color';
import { fontTheme } from '../theme/font';
// import { useSelector } from 'react-redux';


export default function EnterPage({ navigation }) {


  const clickToLogin = () => navigation.navigate('Login');
  const clickToJoin = () => navigation.navigate('Join');
  const clickToSigned = () => navigation.navigate('Signed');

  // const theme = useSelector(state => state.themeSlice)

  return (
    <View style={styles.enterPageWrap}>
      <View style={styles.enterPageHead}>
        <Text style={styles.enterPageTitle}>Welcome Back!</Text>
        <Text style={styles.enterPageContent}>습관이 굳어지기까지, 단 66일!</Text>
      </View>
      <View style={styles.enterPageBody}>
        <TouchableOpacity
          style={styles.enterPageButton}
          onPress={clickToLogin}
        >
          <Text style={styles.enterPageButtonText}>로그인</Text>
        </TouchableOpacity >
        <TouchableOpacity
          style={styles.enterPageButton}
          onPress={clickToJoin}
        >
          <Text style={styles.enterPageButtonText}>회원가입</Text>
        </TouchableOpacity >
        <View style={styles.enterPageSocial}>
          <TouchableOpacity
            style={{ ...styles.enterPageSocialButton, backgroundColor: '#FAE300' }}
            onPress={clickToSigned}
          >
            <Text style={styles.enterPageSocialButtonText}>카카오</Text>
          </TouchableOpacity >
          <TouchableOpacity style={{ ...styles.enterPageSocialButton, backgroundColor: '#fff' }}>
            <Text style={styles.enterPageSocialButtonText}>구글</Text>
          </TouchableOpacity >
        </View>
      </View>
      <View style={styles.enterPageFooter}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  enterPageWrap: {
    flex: 1,
    backgroundColor: darkTheme.bg,
  },
  enterPageHead: {
    flexGrow: 3,
    flexShrink: 0,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  enterPageTitle: {
    fontSize: 30,
    lineHeight: 35,
    color: darkTheme.color,
    fontFamily: fontTheme.noto600
  },
  enterPageContent: {
    fontSize: 15,
    lineHeight: 20,
    color: darkTheme.color,
    fontFamily: fontTheme.noto200
  },
  enterPageBody: {
    flex: 3,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  enterPageButton: {
    justifyContent: 'center',
    width: '85%',
    paddingVertical: 10,
    marginVertical: 7.5,
    backgroundColor: darkTheme.bg,
    borderRadius: 10
  },
  enterPageButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    lineHeight: 15,
    fontFamily: fontTheme.noto600,
    paddingVertical: 2,
  },
  enterPageSocial: {
    justifyContent: 'center',
    width: '85%',
    paddingVertical: 10,
    marginVertical: 10,
    // borderTopWidth: 1,
    borderTopColor: darkTheme.bg,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  enterPageSocialButton: {
    width: '40%',
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center'
  },
  enterPageSocialButtonText: {
    fontSize: 12,
    lineHeight: 15,
    fontFamily: fontTheme.noto600,
    paddingVertical: 2,
  },
  enterPageFooter: {
    flexGrow: 2,
    flexShrink: 0,
  }
});
