
import { createSlice } from "@reduxjs/toolkit";
export const reviews = createSlice({
    name: "review",
    initialState: {
        user: {},
        modal :{isOpen : false,title:'',content:''}
    },
    reducers : {
        modifyModal (state,action){
            state.modal = {...state.modal,...action.payload}
        },
    },
});
export const {modifyModal} = reviews.actions;

export default reviews.reducer;