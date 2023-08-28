import { redirect } from "next/navigation";
import Link from "next/link";
import Todo from "@/models/todo";
import { connectToDB } from "@/utils/db";
import { revalidatePath } from "next/cache";

async function createTodo(data: FormData) {
  "use server";
  connectToDB();
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }
  await new Todo({ title }).save();
  revalidatePath("/");
  redirect("/");
}

export default function Page() {
  return (
    <section className="px-20">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl text-white">New</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          autoFocus={true}
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100 text-white"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </section>
  );
}
