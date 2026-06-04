import { useContext, useState } from 'react';
import { todosClientModel } from '../utils/ModelUtil';
import ThemeContext from '../store/ThemeContext';

const TodoItem = ({todoText, todoDate,id}) => {
  const {DeleteTodo, UpdateTodo} = useContext(ThemeContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editText, setEditText] = useState(todoText);
  const [editDate, setEditDate] = useState(todoDate);

  const DeleteHandler = () => {
    fetch(`https://todo-backend-production-a0e2.up.railway.app/todos/${id}`,{
      method:'DELETE'
    })
    .then (res=> res.json())
    .then (data =>{
      const newData = todosClientModel(data);
      DeleteTodo(newData.id);
    })
    .catch(error =>{
      console.error('Error deleting todo:', error);
    });
  }

  const UpdateHandler = () => {
    fetch(`https://todo-backend-production-a0e2.up.railway.app/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todoText: editText,
        todoDate: editDate
      })
    })
    .then(res => res.json())
    .then(data => {
      const newData = todosClientModel(data);
      UpdateTodo(newData.id, newData.todoText, newData.todoDate);
      setIsEditMode(false);
    })
    .catch(error => {
      console.error('Error updating todo:', error);
    });
  }

  const CancelHandler = () => {
    setEditText(todoText);
    setEditDate(todoDate);
    setIsEditMode(false);
  }
    
  return (
    <div className="container text-center">
      <div className="row ms-1">
        {isEditMode ? (
          <>
            <div className="col-5 text-start">
              <input 
                type="text" 
                className="form-control" 
                value={editText} 
                onChange={(e) => setEditText(e.target.value)}
                placeholder="Task name"
              />
            </div>
            <div className="col-4 text-start">
              <input 
                type="text" 
                className="form-control" 
                value={editDate} 
                onChange={(e) => setEditDate(e.target.value)}
                placeholder="Date"
              />
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-sm btn-outline-success button me-1" onClick={UpdateHandler}>Save</button>
              <button type="button" className="btn btn-sm btn-outline-secondary button" onClick={CancelHandler}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <div className="col-5 text-start text-truncate">{todoText}</div>
            <div className="col-4 text-start text-truncate">{todoDate}</div>
            <div className="col-3">
              <button type="button" className="btn btn-sm btn-outline-primary button me-1" onClick={() => setIsEditMode(true)}>Update</button>
              <button type="button" className="btn btn-sm btn-outline-danger button" onClick={DeleteHandler}>Delete</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default TodoItem;