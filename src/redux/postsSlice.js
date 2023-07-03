import { createSlice } from '@reduxjs/toolkit'

export const psotsSlice = createSlice({
  name: 'posts',
  initialState:{
      items:[]
  },
  reducers: {
      addPost:function (state, action) {
            console.log(action)
            state.items.push(action.payload)
            
      },
      deletePost: function (state , action) {
            state.items =state.items.filter(item => item.id !== action.payload.id)
      },
      updatePost: function (state, action) {
            state.items = state.items.map(item => {
              if (item.id === action.payload.id) {
                item.title = action.payload.title;
                item.description = action.payload.title;
              } return item; // Return the updated item
            });
          }
      },
   })

export const { addPost , deletePost , updatePost} = psotsSlice.actions

export default psotsSlice.reducer