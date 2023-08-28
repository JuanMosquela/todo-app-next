import { createTodo } from "@/actions/serverActions";
import SubmitButton from "@/components/SubmitButton";
import { TodoItem } from "@/components/TodoItem";
import TodoList from "@/components/TodoList";
import { BASE_URL } from "@/utils/url";
import Link from "next/link";

const fetchAllTodos = async () => {
  const res = await fetch(`${BASE_URL}/api/todos`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log("Error while fetching Todos");
  }
  return await res.json();
};

export default async function Home() {
  const { data } = await fetchAllTodos();

  console.log(data);

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

      <TodoList data={data} />
    </>
  );
}
