
import { Alert } from 'react-native';



export const alertOneButton = (message) => {
    return Alert.alert(
        "알림",
        `${message}`,
        [
            { text: '확인' }
        ],
        { cancelable: false } // 외부영역 클릭 시 닫힘 기능 
    )
}

export const alertOneButtonNavi = (message, navigation, naviProps, address) => {
    return Alert.alert(
        "알림",
        `${message}`,
        [
            { text: '확인', onPress: () => naviProps.call(navigation, `${address}`) }
        ],
        { cancelable: false } // 외부영역 클릭 시 닫힘 기능 
    )
}

