import type { TodoView } from "../../types/todo";
import { TodoItem } from "../TodoItem";
import "./TodoColumn.css";

type TodoColumnProps = {
  title: string;
  todoItems: TodoView[];
  onItemClick: (id: string) => void;
};

export const TodoColumn = ({
  title,
  todoItems,
  onItemClick,
}: TodoColumnProps) => {
  const handleTodoItemClick = (id: string) => {
    onItemClick(id);
  };

  return (
    <div className="todo-column">
      <h4 className="todo-column__title">{title}</h4>
      <ul className="todo-column__list">
        {todoItems.map((item) => (
          <li className="todo-column__list-item" key={item.id}>
            <TodoItem
              name={item.name}
              onClick={() => handleTodoItemClick(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
