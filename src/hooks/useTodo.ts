import { useState } from "react";
import type { Todo, TodoView } from "../types/todo";

const mapTodoItems = (initialTodoArray: Todo[]): TodoView[] =>
  initialTodoArray.map((item) => ({
    ...item,
    id: crypto.randomUUID(),
    sorted: false,
  }));

export const useTodo = (initialTodoArray: Todo[]) => {
  const [todoItems, setTodoItems] = useState<TodoView[]>(
    mapTodoItems(initialTodoArray)
  );

  const moveToSorted = (id: string) => {
    const found = todoItems.find((item) => item.id === id);

    if (found) {
      found.sorted = true;
      setTodoItems([...todoItems]);
    } else {
      console.error("Item with id " + id + " not found");
    }
  };

  const moveToUnsorted = (id: string) => {
    const found = todoItems.find((item) => item.id === id);

    if (found) {
      setTodoItems((prev) => [
        ...prev.filter((item) => item.id !== id),
        { ...found, sorted: false },
      ]);
    } else {
      console.error("Item with id " + id + " not found");
    }
  };

  return {
    todoItems,
    moveToSorted,
    moveToUnsorted,
  };
};
