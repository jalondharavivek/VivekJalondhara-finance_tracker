import { createSlice } from "@reduxjs/toolkit";

    const initialState= [{
        name:"vivek",
        email:"vivek@gmail.com",
        password:"123456",
        id:1,
        }]
        


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      newuser(state, action) {
        console.log(action.payload, " 10101..");
        const userdata = action.payload;
        console.log(userdata, "10101.");
  
        state.push(userdata);
        console.log(state, "10101");
      },
    }
    });
    export default userSlice.reducer;
    export const { newuser } =
    userSlice.actions;