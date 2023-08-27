export type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
};

export function TodoItem({ id, title, completed }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center  text-white">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={completed}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
