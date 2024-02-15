import {createSlice} from "@reduxjs/toolkit";



const initialState={
    currentStep:1
}
export const StepperSlice=createSlice({
  name:"step",
  initialState,
  reducers:{
    Step(state){
        state.currentStep+=1
    },
    Back(state){
      state.currentStep-=1
    }
  }
})

export const {Step,Back}=StepperSlice.actions;
export default StepperSlice.reducer;