import { useRef, useContext } from 'react';
import ThemeContext from '../store/ThemeContext';
import {todosClientModel} from '../utils/ModelUtil';

const AddTodo = () => {
  const inputName= useRef();
  const inputDate= useRef();
  const {AddHandlar} = useContext(ThemeContext);

  const SubmitHandler = () => {
    const textValue = inputName.current.value;
    const dateValue = inputDate.current.value;
    if (textValue === "" || dateValue === "") {
      alert("Please enter both todo text and date.");
      return;
    } 
    inputName.current.value = "";
    inputDate.current.value = "";
    fetch('https://todo-backend-production-a0e2.up.railway.app/todos',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        task: textValue,
        date: dateValue
      })
    })
      .then(res =>res.json())
      .then(data =>{
        const { id, todoText, todoDate } = todosClientModel(data);
        AddHandlar(id, todoText, todoDate);
      })
      
      .catch(err => console.error('Error adding todo:', err));
  }
    return (
      <div className="container text-center ">
        <div className="row">
          
          <div className="col-5">
            <input type="text" ref={inputName} className="form-control textInput" placeholder="Enter todo here" ></input>
          </div>
          <div className="col-4">
            <input type="date" ref={inputDate} className="form-control dateInput"></input>
            </div>
          <div className="col-3">
            <button type="button" className="btn ms-1 btn-outline-success button" onClick={SubmitHandler}>Success</button>
          </div>
        </div>
      </div>
    );
}

export default AddTodo;
