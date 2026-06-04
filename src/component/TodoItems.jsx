import TodoItem from "./TodoItem";
import { useContext } from "react";
import ThemeContext from "../store/ThemeContext";

const TodoItems = () => {
  const { Item } = useContext(ThemeContext);

  return (
    <div className="container text-center mt-5">
      <div className="row">
        {Item.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} todoText={todo.todoText} todoDate={todo.todoDate} />
        ))}
      </div>
    </div>
  );
};

export default TodoItems;