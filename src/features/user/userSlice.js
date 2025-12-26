import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";


const token=localStorage.getItem('token');
let initialState={
    token:token,
    user:token?jwtDecode(token):null,
    isAuthenticated:!token
}

export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserData:(state,action)=>{
            const token=action.payload;
            state.token=token;
            state.user=jwtDecode(token);
            state.isAuthenticated=true;
            localStorage.setItem('token',token);    
        },
        LogoutUser:(state)=>{
            state.token=null;
            state.user=null;
            state.isAuthenticated=false;
            localStorage.removeItem('token');
        }
    }
})

export const {setUserData,LogoutUser}=userSlice.actions;
export default userSlice.reducer;