export const fetchAllTodos = async () => {
  const res = await fetch(`http://127.0.0.1/api/todos`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log("Error while fetching Todos");
  }
  return await res.json();
};
