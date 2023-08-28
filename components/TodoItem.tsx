"use client";

import { toggleCheckbox } from "@/actions/serverActions";
import Link from "next/link";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

export type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
};

export function TodoItem({ id, title, completed }: TodoItemProps) {
  const [checked, setChecked] = useState(completed);

  const handleCheckbox = async () => {
    setChecked((prev) => !prev);
    console.log(checked);
  };
  return (
    <li className="flex gap-6 items-center  text-white">
      <div className="flex gap-2">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer text-2xl"
          defaultChecked={completed}
          checked={checked}
          onChange={async () => {
            await handleCheckbox();
            await toggleCheckbox(id, checked);
          }}
        />
        <button
          type="button"
          className="bg-red-400 text-black rounded-sm text-2xl"
        >
          <AiFillDelete />
        </button>
      </div>

      <Link href={`todo/${id}`}>
        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
        >
          {title}
        </label>
      </Link>
    </li>
  );
}
