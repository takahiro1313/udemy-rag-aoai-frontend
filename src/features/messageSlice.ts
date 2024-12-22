import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import {MessageType} from '@/types/types';

type InitialStateType = {
    onyourdata:MessageType[];
}

const initialState:InitialStateType = {
   onyourdata: [] 
}

export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        inputMessageToReduxStore: (state, action) => {
            console.log("Action Payload:", action.payload); // アクションに渡されたデータ
            console.log("Before Update State:", state.onyourdata); // 更新前のステート
            if (action.payload.pathname === "/") {
                state.onyourdata.push(action.payload);
            }
            console.log("After Update State:", state.onyourdata); // 更新後のステート
        }
    }
    // reducers: {
    //     inputMessageToReduxStore: (state,action) => {
    //         if(action.payload.pathname === "✔"){
    //             state.onyourdata.push(action.payload)
    //         }
    //     }
    // }
})

export const {inputMessageToReduxStore} = messageSlice.actions;
export const selectMessage = (state: RootState) => state.message;
export default messageSlice.reducer;