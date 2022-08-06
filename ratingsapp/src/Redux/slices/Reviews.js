
import { createSlice } from "@reduxjs/toolkit";
export const reviews = createSlice({
    name: "review",
    initialState: {
        user: {},
        modal :{isopen : false,title:'',content:''}
    },
    reducers : {
        modifyModal (state,action){
            state.modal = {...state.modal,...action.payloiad}
        },
    },
});
export const {modifyModal} = reviews.actions;

export default reviews.reducer;