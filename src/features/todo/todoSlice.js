import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos:[{id:1, text:"HELLO"}]
}

export const todoSlice= createSlice({
    name: 'todo',
    initialState,
   reducers:{
    addTodo: (state, action)=>{
  const todo = {
    id: nanoid(),
    text: action.payload
  }
  state.todos.push(todo)
    },

    removeTodo: (State, action)=>{
        State.todos = State.todos.filter((todo)=>{todo.id !== action.payload})
    },

    
        updateTodo: (State, action)=>{
     const{id,text}= action.payload;
     const todosindex = State.todos.findIndex((todo)=>{todo.id===id})
      if(todosindex !=-1){
State.todos[todosindex].text = text
      }
        }

    }
   
})
export const {addTodo, removeTodo, updateTodo}= todoSlice.actions

export default todoSlice.reducer