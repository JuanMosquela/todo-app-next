import Todo from "@/models/todo";
import { connectToDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connectToDB();

  const { input } = await request.json();

  new Todo({ title: input }).save();

  return NextResponse.json({ message: "Todo created" }, { status: 200 });
}
