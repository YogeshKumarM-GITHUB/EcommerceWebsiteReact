import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:'user',
    initialState:{
        user:{
            email:null,
            password:null,
        }
    },
    reducers:{
        setUserData:(state,action)=>{
            state.user=action.payload
            console.log("User set in Redux:", state.user);
        }
    }
})

export const {setUserData}=userSlice.actions;
export default userSlice.reducer;