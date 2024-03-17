import {createSlice} from "@reduxjs/toolkit";


 const toggleSlice = createSlice({
    name: 'toggle',
    initialState:{
        toggle: false
    },
    reducers:{
        toggling:(state, action)=>{
            state.toggle = !state.toggle
        }
    }
})


export const {toggling} = toggleSlice.actions
export default toggleSlice.reducer