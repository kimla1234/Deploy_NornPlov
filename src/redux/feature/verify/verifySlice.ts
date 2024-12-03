import { PayloadAction, createSlice } from '@reduxjs/toolkit';
type verifyState ={
  email: string | null; 

}
const initialState:verifyState = {
  email: null
};

const verifySlice = createSlice({
  name: 'verify',
  initialState,
  reducers: {
    setEmail: (state, action:PayloadAction<string>) => {
      state.email = action.payload;
    }
  },
});


export const { setEmail } = verifySlice.actions;

export default verifySlice.reducer;