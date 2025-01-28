import Todo from "./Todo.tsx";
import "../css/todoList.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.tsx";
import { TodoType } from "../redux/types/Types.tsx";



function TodoList() {
  const {todos} =  useSelector((state:RootState) =>  state.todo)

  return (
    <div className="todo_list">
      {todos && todos.map ((todo:TodoType) =>
           <Todo key={todo.id} todoProps = {todo} />
      )}
    </div>
  );
}

export default TodoList;
