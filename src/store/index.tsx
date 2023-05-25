import { configureStore }    from '@reduxjs/toolkit'
import transactionSlice from './slice/transactionsl';
export const store = configureStore({

    reducer:{
         transactions: transactionSlice,
        //  users:userSlice,
        //  usecdata : usecokkie,
    
    },
    
});