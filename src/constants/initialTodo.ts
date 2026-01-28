import type { Todo, TodoType } from "../types/todo";

export const INITIAL_TODO_ARRAY: Todo[] = [
  {
    type: "Fruit",
    name: "Apple",
  },
  {
    type: "Vegetable",
    name: "Broccoli",
  },
  {
    type: "Vegetable",
    name: "Mushroom",
  },
  {
    type: "Fruit",
    name: "Banana",
  },
  {
    type: "Vegetable",
    name: "Tomato",
  },
  {
    type: "Fruit",
    name: "Orange",
  },
  {
    type: "Fruit",
    name: "Mango",
  },
  {
    type: "Fruit",
    name: "Pineapple",
  },
  {
    type: "Vegetable",
    name: "Cucumber",
  },
  {
    type: "Fruit",
    name: "Watermelon",
  },
  {
    type: "Vegetable",
    name: "Carrot",
  },
];

export const TIMER_DELAY = 5000;

export const TODO_TYPES: Record<string, TodoType> = {
    fruit: "Fruit",
    vegetable: "Vegetable",
}