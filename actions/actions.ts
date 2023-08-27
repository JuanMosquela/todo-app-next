export const fetchAllTodos = async () => {
  const res = await fetch(`http://localhost:3000/api/todos`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log("Error while fetching Todos");
  }
  return await res.json();
};
