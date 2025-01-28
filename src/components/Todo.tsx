import "../css/todo.css";
import { IoIosRemoveCircle } from "react-icons/io";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { TodoType } from "../redux/types/Types";
import { useDispatch } from "react-redux";
import { deleteTodoById, updateTodoById } from "../redux/todoSlice";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;
  const dispatch = useDispatch();

  const [editable, setEditable] = useState(true);
  const [updateText, setUpdateText] = useState(content);

  const handleDeleteTodoById = () => {
    dispatch(deleteTodoById(id));
  };

  const toggleEditMode = () => {
    setEditable((prev) => !prev);
  };

  useEffect(() => {
    if (editable) {
      const payload: TodoType = {
        id: id,
        content: updateText,
      };
      dispatch(updateTodoById(payload));
    }
  }, [editable]);

  return (
    <>
      <div className="todo">
        {editable ? (
          <p>{content}</p>
        ) : (
          <input
            type="text"
            value={updateText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUpdateText(e.target.value)
            }
          />
        )}
        <div className="todo_icons">
          <IoIosRemoveCircle onClick={handleDeleteTodoById} />
          {editable ? (
            <MdOutlineModeEditOutline onClick={toggleEditMode} />
          ) : (
            <FaCheck onClick={toggleEditMode} />
          )}
        </div>
      </div>
    </>
  );
}

export default Todo;
