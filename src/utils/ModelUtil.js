export const todosClientModel =(data) =>{
    return {
        id: data.id,
        todoText: data.task,
        todoDate: data.date
    }

}