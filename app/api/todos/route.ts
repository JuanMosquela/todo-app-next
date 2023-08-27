import Todo from "@/models/todo";
import { connectToDB } from "@/utils/db";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();

    const data = await Todo.find({});

    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
  }
}
