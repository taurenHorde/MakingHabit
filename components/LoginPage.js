import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { darkTheme, lightTheme } from '../theme/color';
import { fontTheme } from '../theme/font';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { alertOneButton } from '../function/functions';
import { apiLoginAccout } from '../function/api';

export default function LoginPage({ navigation }) {

    const loginMutation = useMutation({
        mutationFn: apiLoginAccout,
        onSuccess: (data) => {
            return navigation.reset({
                index: 0,
                routes: [{ name: 'Signed' }]
            })
        },
        onError: (error) => {
            const status = error.response?.status;
            const errorData = error.response?.data.details;

            if (status === 400) {
                if (errorData.errCode === 1) return alertOneButton("입력 란에 빈 칸 없이 입력해주시길 바랍니다.") // 데이터 누락
                if (errorData.errCode === 2) return alertOneButton("아이디 또는 비밀번호가 맞지 않습니다.") // 데이터 검증 오류
            } else if (status === 500) {
                if (errorData.errCode === 4) return alertOneButton(errorData.errResData?.text) // DB insert 오류
            }
        }
    })


    const [username, setUsername] = useState('');
    const onChangeUsername = (event) => setUsername(event)
    const [password, setPassword] = useState('');
    const onChangePassword = (event) => setPassword(event)

    const clickToLogin = () => {
        if (username === "" || password === "") return alertOneButton("입력 란에 빈 칸 없이 입력해주시길 바랍니다.");
        return loginMutation.mutate({ username, password })
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
                        autoCapitalize='none'
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
                        autoCapitalize='none'
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
