
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Animated, PanResponder, ActivityIndicator } from 'react-native';
import { darkTheme, lightTheme } from '../theme/color';
import { fontTheme } from '../theme/font';

export default function MainPage({ navigation }) {


    let testArr = Array.from({ length: 5 }, (_, i) => i + 1)
    const boxWrapWidRef = useRef(0); // goalBox
    const aniBoxWidRef = useRef(0); // goalSetting - Animated
    const [wrapTransLateX, setWrapTransLateX] = useState(0);


    const renderComponent = (val, idx) => {

        const wrapX = useRef(new Animated.Value(0)).current;
        const wrapResponder = (type) => {
            Animated.timing(wrapX, {
                toValue: wrapTransLateX * type,
                duration: 200,
                useNativeDriver: true,
            }).start();
        }

        const pan = useRef(new Animated.ValueXY()).current;
        const panResponder = useRef(
            PanResponder.create({
                onStartShouldSetPanResponder: () => true,
                onPanResponderMove: (e, gestureState) => {
                    const dx = gestureState.dx
                    const limitedX = Math.max(Math.min(dx, aniBoxWidRef.current / 2), -aniBoxWidRef.current / 2);
                    pan.setValue({ x: limitedX, y: 0 })
                },
                onPanResponderRelease: (e, gestureState) => {
                    const dragCheck = Math.abs(gestureState.dx) >= (aniBoxWidRef.current / 2)
                    Animated.spring(pan, {
                        toValue: {
                            x: 0, y: 0
                        },
                        useNativeDriver: false
                    }).start()
                    if (dragCheck) {
                        if (gestureState.dx > 0) console.log(`${idx} => 왼쪽`)
                        if (gestureState.dx < 0) console.log(`${idx} => 오른쪽`)
                    }
                },
            }),
        ).current;

        const aniBoxLayout = (e) => {
            const { width } = e.nativeEvent.layout;
            aniBoxWidRef.current = width;
        }

        const boxWrapLayout = (e) => {
            const { width } = e.nativeEvent.layout;
            setWrapTransLateX(width * 0.3)
            boxWrapWidRef.current = width;
            wrapResponder(1)
        }

        return (
            <Animated.View
                key={idx}
                onLayout={boxWrapLayout}
                style={{
                    ...styles.mainPageGoalBox,
                    transform: [{ translateX: wrapX }]
                }}
            >
                <View style={styles.mainPageGoalPart1}>
                    <View style={styles.mainPageGoalResult}>
                        <Text>{idx}</Text>
                    </View>
                    <View style={styles.mainPageGoalName}>
                        <Text>헬스장 다녀오기!</Text>
                    </View>
                </View>
                <Animated.View
                    onLayout={aniBoxLayout}
                    style={{
                        ...styles.mainPageGoalSetting,
                        transform: [{ translateX: pan.x }],
                    }}
                    {...panResponder.panHandlers}
                >
                    <Text style={styles.textText}>Slide</Text>
                </Animated.View>
                <View style={{
                    ...styles.mainPageGoalPart3,
                    flexBasis: '20%'
                }}>

                </View>
            </Animated.View>
        )
    }


    return (
        <View style={styles.mainPageWrap}>
            <View style={styles.mainPageHead}>
                <Text style={styles.mainPageTitle}>24.09.06</Text>
            </View>
            <View style={styles.mainPageBody}>
                {testArr?.map((val, idx) => renderComponent(val, idx))}
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
        alignItems: 'center'
    },
    mainPageGoalBox: {
        marginVertical: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: 'rgba(245, 245, 245, 0.5)',
        width: '180%',
        minHeight: 70,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mainPageGoalPart1: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 0, 255, 0.16)'
    },
    mainPageGoalResult: {
        width: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainPageGoalName: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    mainPageGoalSetting: {
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainPageGoalPart3: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 0, 255, 0.16)'
    },
    mainPageFooter: {
        flexGrow: 1,
        flexShrink: 1,
    },
});
