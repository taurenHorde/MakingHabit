import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { darkTheme, lightTheme } from '../theme/color';
import { fontTheme } from '../theme/font';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

export default function LoginPage({ navigation }) {



    const [username, setUsername] = useState('');
    const onChangeUsername = (event) => setUsername(event)
    const [password, setPassword] = useState('');
    const onChangePassword = (event) => setPassword(event)

    const clickToLogin = () => {
        console.log(username)
        console.log(password)
    }

    return (
        <View style={styles.loginPageWrap}>
            <View style={styles.loginPageHead}>
                <Text style={styles.loginPageTitle}>로그인</Text>
            </View>
            <View style={styles.loginPageBody}>
                <View style={styles.loginPageInputBox}>
                    <Text style={styles.loginPageInputText}>아이디</Text>
                    <TextInput
                        style={styles.loginPageInput}
                        onChangeText={onChangeUsername}
                        value={username}
                        color={darkTheme.bg}
                    />
                </View>
                <View style={styles.loginPageInputBox}>
                    <Text style={styles.loginPageInputText}>비밀번호</Text>
                    <TextInput
                        style={styles.loginPageInput}
                        onChangeText={onChangePassword}
                        value={password}
                        color={darkTheme.bg}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity
                    style={styles.loginPageButton}
                    onPress={clickToLogin}
                >
                    <Text style={styles.loginPageInputButtonText}>로그인</Text>
                </TouchableOpacity>
                <View style={styles.loginPageInputBox}>
                    <Text style={styles.loginPageInputText}>계정 및 비밀번호 찾기(구현x)</Text>
                </View>
            </View>
            <View style={styles.loginPageFooter}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    loginPageWrap: {
        flex: 1,
        backgroundColor: darkTheme.bg,
    },
    loginPageHead: {
        flexGrow: 1,
        flexShrink: 0,
        backgroundColor: darkTheme.bg,
        justifyContent: 'flex-end',
        marginVertical: 20
    },
    loginPageTitle: {
        paddingHorizontal: 20,
        fontSize: 30,
        lineHeight: 35,
        color: darkTheme.color,
        fontFamily: fontTheme.noto600
    },
    loginPageBody: {
        flexGrow: 1.2,
        flexShrink: 0,
        backgroundColor: 'gray',
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 40,
    },
    loginPageInputBox: {
        marginVertical: 5,
        paddingVertical: 5,
        width: '85%'
    },
    loginPageInputText: {
        fontSize: 12,
        lineHeight: 15,
        fontFamily: fontTheme.noto700,
        paddingHorizontal: 5,
        marginBottom: 5,
        color: darkTheme.color
    },
    loginPageInput: {
        borderWidth: 1,
        marginTop: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 0,
        backgroundColor: 'white',
        borderRadius: 10
    },
    loginPageButton: {
        justifyContent: 'center',
        width: '85%',
        paddingVertical: 10,
        marginTop: 30,
        backgroundColor: darkTheme.bg,
        borderRadius: 10,
    },
    loginPageInputButtonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 12,
        lineHeight: 15,
        fontFamily: fontTheme.noto600,
        paddingVertical: 2,
    },
    loginPageFooter: {
        flexGrow: 1,
        flexShrink: 0,
        backgroundColor: darkTheme.bg
    }
});
