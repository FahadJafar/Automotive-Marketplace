import { createSlice } from "@reduxjs/toolkit";

export const createLog=createSlice({
name:"log",
initialState:
{
    NAME:null,
    token:0
},
reducers:{
    setName:(state,action)=>
    {
    state.NAME=action.payload
    },
    setToken:(state,action)=>{
        state.token = action.payload
    },
    clear:(state)=>{
        state.NAME=null;
        state.token=0;
       
    }
}

});
export const {setName,setToken,clear}=createLog.actions;
export default createLog.reducer;