import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  components: [{
    Heading:"",
    Label:"",
    textColor:"",
    FontWeight:"",
    Height:"",
    width:""
  }],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addComponent: (state, action) => {
      state.components.push({...action.payload});
    },
    updateComponents: (state, action) => {
      state.components = action.payload;
    },
  },
});

export const { addComponent, updateComponents } = formSlice.actions;
export default formSlice.reducer;
