
import { configureStore } from '@reduxjs/toolkit';
import dateSliceReducer from './dateSlice'


const store = configureStore({
    reducer: {
        dateSlice: dateSliceReducer
    }
});

export default store;