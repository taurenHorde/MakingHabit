


import { createSlice } from '@reduxjs/toolkit';


const dateSlice = createSlice({
    name: 'dateSlice',
    initialState: {
        selectDate: ""
    },
    reducers: {
        chooseDate: (state, action) => {
            state.selectDate = action.payload;
        }
    }
});

export const { chooseDate } = dateSlice.actions;
export default dateSlice.reducer;