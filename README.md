# 🗂 Auto Delete Todo List

Implementation of the test assignment:  
🔗 https://github.com/7-solutions/frontend-assignment?tab=readme-ov-file

Live demo:  
🚀 https://denismukhametshin.github.io/auto-delete-todo/

---

## 📌 Project Overview

This application implements a sortable Todo list with automatic return behavior.

Users can move items between the main list and category columns (`Fruit` and `Vegetable`).  
If a sorted item is not interacted with for 5 seconds, it automatically returns to the main list.

The item is always returned **to the end of the list**.

---

## ⚙️ Features

- Move items from main list to category columns
- Move items back manually
- Automatic return after 5 seconds
- Clear timer handling
- Items return to the end of the main list
- Clean state management with custom hooks
- Fully typed with TypeScript
- Deployed to GitHub Pages

---

## 🧠 Architecture

The project follows a modular and hook-based architecture:

### Custom Hooks

- `useTodo`
  - Manages todo state
  - Handles sorting / unsorting logic
  - Ensures items return to the end of the list

- `useAutoReturn`
  - Manages timers
  - Starts timer when item is sorted
  - Clears timer when item is manually returned

### State Flow

1. Click item in main list → move to category
2. Start 5-second timer
3. If clicked in category → return immediately
4. If timer expires → auto-return to end of main list

---

## 🛠 Tech Stack

- React
- TypeScript
- Vite
- ESLint
- GitHub Pages (deployment)

---

## 📦 Installation

```bash
npm install
```

---

## 🚀 Available Commands

```bash
npm run dev       # Start development server
npm run build     # TypeScript + Vite production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
npm run deploy    # Deploy to GitHub Pages
```

---

## 🧩 Implementation Details

- Immutable state updates
- Clean separation of concerns
- Timer cleanup to prevent memory leaks
- Stable rendering via proper key usage
- Optimized state transitions

---

## 🎯 Goals

- Demonstrate clean React architecture
- Showcase proper state management
- Show understanding of async side-effects (timers)
- Write predictable and readable TypeScript code
- Follow best frontend engineering practices

---

## 📄 License

This project was created as part of a frontend technical assignment.