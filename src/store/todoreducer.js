const todoreducer = (currentItem, action) => {
            
    switch (action.type) {
        case 'ADD_TODO':{
            const id = action.payload.id;
            const  todoText = action.payload.textValue;
            const  todoDate = action.payload.dateValue;
            currentItem = [...currentItem, {id, todoText, todoDate}]}
            break;
        case 'DELETE_TODO':{
            const {id} = action.payload;
            currentItem = currentItem.filter(todo => todo.id !== id) }  
            break;
        case 'UPDATE_TODO':{
            const {id, newText, newDate} = action.payload;
            currentItem = currentItem.map(todo => 
                todo.id === id 
                    ? {
                        ...todo,
                        todoText: newText !== undefined ? newText : todo.todoText,
                        todoDate: newDate !== undefined ? newDate : todo.todoDate
                      }
                    : todo
            );
            break;
        }
        case 'ALL_ITEMS_LOAD':
            currentItem = action.payload.AllItem;
            break;
       default:
            break;
    }
    return currentItem;
     
};
export default todoreducer;