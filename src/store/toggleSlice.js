import {createSlice} from "@reduxjs/toolkit";


 const toggleSlice = createSlice({
    name: 'toggle',
    initialState:{
        toggle: false
    },
    reducers:{
        toggling:(state, action)=>{
            state.toggle = !state.toggle
        },
        closeMenu: (state , action) =>{
            state.toggle = false
        }
    }
})


export const {toggling, closeMenu} = toggleSlice.actions
export default toggleSlice.reducer