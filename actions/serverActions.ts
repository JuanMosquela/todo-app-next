"use server";

import Todo from "@/models/todo";
import { connectToDB } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTodo(data: FormData) {
  connectToDB();
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }
  await new Todo({ title }).save();
  revalidatePath("/");
  redirect("/");
}

export async function toggleCheckbox(id: string, state: boolean) {
  connectToDB();
  await Todo.findByIdAndUpdate(id, { completed: state });
  revalidatePath("/");
  redirect("/");
}
