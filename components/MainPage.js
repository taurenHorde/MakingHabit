
import { useRef } from 'react';
import { StyleSheet, Text, View, Animated, PanResponder } from 'react-native';
import { darkTheme, lightTheme } from '../theme/color';
import { fontTheme } from '../theme/font';

export default function MainPage({ navigation }) {

    let testArr = Array.from({ length: 2 }, (_, i) => i + 1)


    const renderComponent = (idx) => {
        const pan = useRef(new Animated.ValueXY()).current;
        const panResponder = useRef(
            PanResponder.create({
                onStartShouldSetPanResponder: () => true,
                onPanResponderMove: Animated.event(
                    [null, { dx: pan.x }],
                    {
                        useNativeDriver: false,
                        listener: (e, gestureState) => {
                            console.log("X" + gestureState.dx)
                        }
                    }
                ),
                onPanResponderRelease: () => {
                    pan.extractOffset()
                },
                // onPanResponderMove: (e, g) => {
                // pan.x.setValue(g.dx);
                // pan.y.setValue(g.dy);
                // 직접 처리 하는 방법 },
            }),
        ).current;

        return (
            <View style={styles.mainPageGoalBox} key={idx}>
                <View style={styles.mainPageGoalResult}></View>
                <View style={styles.mainPageGoalName}></View>
                <Animated.View
                    style={{
                        ...styles.mainPageGoalSetting,
                        transform: [{ translateX: pan.x }],
                    }}
                    {...panResponder.panHandlers}
                >
                    <Text style={styles.textText}>Slide</Text>
                </Animated.View>
            </View>
        )

    }


    return (
        <View style={styles.mainPageWrap}>
            <View style={styles.mainPageHead}>
                <Text style={styles.mainPageTitle}>24.09.06</Text>
            </View>
            <View style={styles.mainPageBody}>
                {testArr?.map((val, idx) => renderComponent(idx))}
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
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainPageFooter: {
        flexGrow: 1,
        flexShrink: 1,
    },
});
