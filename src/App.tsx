import "./App.css";
import { TodoColumn } from "./components/TodoColumn";
import { TodoList } from "./components/TodoList";
import {
  INITIAL_TODO_ARRAY,
  TIMER_DELAY,
  TODO_TYPES,
} from "./constants/initialTodo";
import { useTodo } from "./hooks/useTodo";
import { useAutoReturn } from "./hooks/useAutoReturn";

function App() {
  const { todoItems, moveToSorted, moveToUnsorted } =
    useTodo(INITIAL_TODO_ARRAY);

  const { addTimer, removeTimer } = useAutoReturn({
    timeDelay: TIMER_DELAY,
    timerCallback: moveToUnsorted,
  });

  const handleTodoListItemClick = (id: string) => {
    moveToSorted(id);
    addTimer(id);
  };

  const handleTodoColumnItemClick = (id: string) => {
    moveToUnsorted(id);
    removeTimer(id);
  };

  const unsorted = todoItems.filter((item) => !item.sorted);

  const fruits = todoItems.filter(
    (item) => item.sorted && item.type === TODO_TYPES.fruit
  );

  const vegetables = todoItems.filter(
    (item) => item.sorted && item.type === TODO_TYPES.vegetable
  );

  return (
    <div className="todo">
      <TodoList todoItems={unsorted} onItemClick={handleTodoListItemClick} />
      <TodoColumn
        title={TODO_TYPES.fruit}
        todoItems={fruits}
        onItemClick={handleTodoColumnItemClick}
      />
      <TodoColumn
        title={TODO_TYPES.vegetable}
        todoItems={vegetables}
        onItemClick={handleTodoColumnItemClick}
      />
    </div>
  );
}

export default App;
