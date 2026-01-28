export type TodoType = "Fruit" | "Vegetable";

export type Todo = {
  name: string;
  type: TodoType;
};

export type TodoView = Todo & {
  id: string;
  sorted: boolean;
};
