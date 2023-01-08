import {createSlice} from '@reduxjs/toolkit';

const chatSlice= createSlice({
    name: 'chat',
    initialState: {me:'hi buddy', friend: 'Hi, friend'},
    reducers:{
        postMessage(state,action){
            if(action.payload.who==='me'){
                state.me=action.payload.message;
            }else{
                state.friend=action.payload.message;
            }
        }
    }
});

export const {postMessage}= chatSlice.actions

export default chatSlice.reducer