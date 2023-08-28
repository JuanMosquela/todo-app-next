"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import { TodoItem, TodoItemProps } from "./TodoItem";
import SubmitButton from "./SubmitButton";
import { createTodo } from "@/actions/serverActions";

type TodoItem = {
  _id: string;
  title: string;
  completed: boolean;
};

type TodoListProps = {
  data: TodoItem[];
};

const TodoList = ({ data }: TodoListProps) => {
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(
    data,
    (state, newTodo: TodoItem) => {
      return [...state, newTodo];
    }
  );
  return (
    <>
      <form
        action={async (formData: FormData) => {
          const title = formData.get("title")?.valueOf();
          if (typeof title !== "string" || title.length === 0) {
            throw new Error("Invalid Title");
          }
          setOptimisticTodos({
            _id: Math.random().toString(),
            title,
            completed: false,
          });
          await createTodo(title);
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Create a new todo"
          autoFocus={true}
        />
        <SubmitButton />
      </form>
      <ul className="pl-4 flex flex-col gap-2">
        {optimisticTodos.length > 0 &&
          data?.map((todo: TodoItem) => (
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
};

export default TodoList;
