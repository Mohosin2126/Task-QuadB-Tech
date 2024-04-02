import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../TodoSlice/TodoSlice"; 

// Configure the Redux store with the todoSlice.reducer as a reducer
export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer // Include the todoSlice.reducer as a reducer
    }
});
