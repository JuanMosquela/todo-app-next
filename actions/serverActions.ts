"use server";

import Todo from "@/models/todo";
import { connectToDB } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTodo(title: string) {
  connectToDB();

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
