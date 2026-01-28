import "./TodoItem.css";

type TodoItemProps = {
  name: string;
  onClick: () => void;
};

export const TodoItem = ({ name, onClick }: TodoItemProps) => {
  return (
    <button
      onClick={onClick}
      className="button"
      type="button"
      aria-label={`Move ${name}`}
    >
      {name}
    </button>
  );
};
