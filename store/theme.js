


import { createSlice } from '@reduxjs/toolkit';


const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkTheme: {
            bg: "#3A3D40",
            color: "white"
        },
        lightTheme: {
            bg: "white",
            color: "#3A3D40"
        },
        fontTheme: {
            noto200: 'notoSans200',
            noto300: 'notoSans300',
            noto400: 'notoSans400',
            noto600: 'notoSans600',
            noto700: 'notoSans700'
        }
    },
});

export default themeSlice.reducer;