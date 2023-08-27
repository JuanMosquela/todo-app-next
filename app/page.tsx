import { fetchAllTodos } from "@/actions/actions";
import { TodoItem } from "@/components/TodoItem";
import Link from "next/link";

export default async function Home() {
  const { data } = await fetchAllTodos();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl text-white">Todos</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/create-todo"
        >
          Create Todo
        </Link>
      </header>
      <ul className="pl-4">
        {data.length > 0 &&
          data?.map((todo: any) => (
            <TodoItem
              key={todo._id}
              id={todo._id}
              title={todo.title}
              completed={todo.completed}
            />
          ))}
      </ul>
    </>
  );
}
