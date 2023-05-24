import { createSlice } from "@reduxjs/toolkit";

   


const cookiedata = createSlice({
    name: "user",
    reducers: {
        usecokkie(state,action){
            const cookie = action.payload;
            state.push(cookie)
         }
   
    }
    });
    export default cookiedata.reducer;
    export const { usecokkie } =
    cookiedata.actions;