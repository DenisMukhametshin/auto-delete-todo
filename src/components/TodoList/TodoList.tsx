import type { TodoView } from "../../types/todo";
import { TodoItem } from "../TodoItem";
import "./TodoList.css";

type TodoListProps = {
  todoItems: TodoView[];
  onItemClick: (id: string) => void;
};

export const TodoList = ({ todoItems, onItemClick }: TodoListProps) => {
  const handleTodoItemClick = (id: string) => {
    onItemClick(id);
  };

  return (
    <ul className="todo-list">
      {todoItems.map((item) => (
        <li className="todo-list__item" key={item.id}>
          <TodoItem
            name={item.name}
            onClick={() => handleTodoItemClick(item.id)}
          />
        </li>
      ))}
    </ul>
  );
};
