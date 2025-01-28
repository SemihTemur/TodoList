import { useDispatch } from "react-redux";
import "../css/todoCreate.css";
import { TodoType } from "../redux/types/Types";
import { useState } from "react";
import { addTodo } from "../redux/todoSlice";

function TodoCreate() {
  const [newTodo, newSetTodo] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Sayfa yenilenmesini engeller
    console.log("Form submitted!");
  };

  const addNewTodo = () => {
    if (newTodo.trim().length == 0) {
      alert("Lütfen bir todo giriniz.");
      return;
    }

    const payload: TodoType = {
      id: Math.floor(Math.random() * 9999999),
      content: newTodo,
    };
    dispatch(addTodo(payload));
    newSetTodo("");
  };

  return (
    <div className="todo_create">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo Giriniz..."
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            newSetTodo(e.target.value)
          }
        />
        <button onClick={addNewTodo}>Oluştur</button>
      </form>
    </div>
  );
}

export default TodoCreate;
