import Link from "next/link";
import { createTodo } from "@/actions/serverActions";
import SubmitButton from "@/components/SubmitButton";

export default function Page() {
  return (
    <section className="px-20">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl text-white">New</h1>
      </header>
      <form
        action={async (formData: FormData) => {
          const title = formData.get("title");
          if (typeof title !== "string" || title.length === 0) {
            throw new Error("Invalid Title");
          }

          await createTodo(title);
        }}
        className="flex gap-2 flex-col"
      >
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
          <SubmitButton />
        </div>
      </form>
    </section>
  );
}
