
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { darkTheme, lightTheme } from '../theme/color';
import { fontTheme } from '../theme/font';
import Checkbox from 'expo-checkbox';

export default function MainPage({ navigation }) {


    return (
        <View style={styles.MainPageWrap}>

        </View>
    );
}

const styles = StyleSheet.create({
    MainPageWrap: {
        flex: 1,
        backgroundColor: darkTheme.bg,
    },

});
