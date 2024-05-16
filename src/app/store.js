//*  The steps of creating a store for redux toolkit:

//# step1: import configureStore from redux-toolkit:
//# import configureStore from '@reduxjs/toolkit';

//# step2: export store variable:
//# export const store = configureStore({});

//# step3: create reducer


import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})