import { BASE_URL } from "@/utils/url";
import React from "react";

const fetchTodoById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/api/todos/${id}`);

  if (!res.ok) {
    console.log("Somthin wrong happend");
  }

  return res.json();
};

const TodoPage = async ({ params }: any) => {
  const { id } = params;
  const { todo } = await fetchTodoById(id);

  return (
    <section className="text-white px-20">
      <div className="border border-white p-2 rounded-md flex justify-between">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer "
          defaultChecked={todo.completed}
        />
        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
        >
          {todo.title}
        </label>
      </div>
    </section>
  );
};

export default TodoPage;
