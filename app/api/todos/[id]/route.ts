import Todo from "@/models/todo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  const { id } = params;

  const todo = await Todo.findById(id);

  if (!todo) {
    return NextResponse.json({ message: "No Todo found" }, { status: 400 });
  }

  return NextResponse.json({ todo }, { status: 200 });
}

export async function PUT(request: NextRequest, { params }: any) {
  const { id } = params;
  const { title } = await request.json();

  const todo = await Todo.findByIdAndUpdate(id, {
    title,
  });

  if (!todo) {
    console.log("No se enctrono el todo a modificar");
  }

  return NextResponse.json({ message: "Todo actalizado" }, { status: 200 });
}

export async function DELETE({ params }: any) {
  const { id } = params;

  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Todo deleted" }, { status: 200 });
}
