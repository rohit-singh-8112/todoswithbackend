import React, { createContext, useReducer } from 'react'

import todoreducer from './todoreducer';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [Item, ItemDispatch] = useReducer(todoreducer, []);
    
    const AddHandlar = (id, textValue, dateValue) => {
        ItemDispatch({
            type: 'ADD_TODO',
            payload: {
                id,
                textValue,
                dateValue
            }
        });     
    }

    const DeleteTodo = (id) => {
        ItemDispatch({
            type: 'DELETE_TODO',
            payload: { id }
        });
    };

    const UpdateTodo = (id, newText, newDate) => {
        ItemDispatch({
            type: 'UPDATE_TODO',
            payload: { id, newText, newDate }
        });
    };

    const AllItemsLoad = (data) => {
        ItemDispatch({
            type: 'ALL_ITEMS_LOAD',
            payload: { 
                AllItem: data }
        });
    }
    
  return (
    <ThemeContext.Provider value={{Item, AddHandlar, DeleteTodo, UpdateTodo, AllItemsLoad}}>
        {children}
    </ThemeContext.Provider>
  )
}
export default ThemeContext;

