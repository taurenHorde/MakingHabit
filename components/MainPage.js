
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { darkTheme, lightTheme } from '../theme/color';
import { fontTheme } from '../theme/font';
import Checkbox from 'expo-checkbox';

export default function MainPage({ navigation }) {

    let testArr = Array.from({ length: 5 }, (_, i) => i + 1)

    return (
        <View style={styles.mainPageWrap}>
            <View style={styles.mainPageHead}>
                <Text style={styles.mainPageTitle}>24.09.06</Text>
            </View>
            <View style={styles.mainPageBody}>
                {testArr?.map((val) => (
                    <View style={styles.mainPageGoalBox} key={val}>
                        <View style={styles.mainPageGoalResult}></View>
                        <View style={styles.mainPageGoalName}></View>
                        <View style={styles.mainPageGoalSetting}></View>
                    </View>
                ))}
            </View>
            <View style={styles.mainPageFooter}>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainPageWrap: {
        flex: 1,
        backgroundColor: darkTheme.bg,
    },
    mainPageHead: {
        flexBasis: "15%",
        flexShrink: 0,
        justifyContent: 'flex-end',
    },
    mainPageTitle: {
        paddingHorizontal: 20,
        fontSize: 25,
        lineHeight: 30,
        color: darkTheme.color,
        fontFamily: fontTheme.noto600
    },
    mainPageBody: {
        flexGrow: 1,
        flexShrink: 1,
        paddingTop: 15,
        marginTop: 20,
        alignItems: 'flex-end'
    },
    mainPageGoalBox: {
        marginVertical: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: 'skyblue',
        width: '95%',
        minHeight: 70,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        flexDirection: 'row'
    },
    mainPageGoalResult: {
        width: 60,
        backgroundColor: 'red'
    },
    mainPageGoalName: {
        flexGrow: 1
    },
    mainPageGoalSetting: {
        width: 60,
        backgroundColor: 'red'
    },
    mainPageFooter: {
        flexGrow: 1,
        flexShrink: 1,
    },
});
