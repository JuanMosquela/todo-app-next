import { BASE_URL } from "@/utils/url";

export const fetchAllTodos = async () => {
  const res = await fetch(`${BASE_URL}/api/todos`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log("Error while fetching Todos");
  }
  return await res.json();
};
