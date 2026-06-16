if (!global.todos) {
  global.todos = [];
}

export async function PATCH(req, { params }) {
  const { id } = await params;

  const index = global.todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    return Response.json({ error: "Todo niet gevonden" }, { status: 404 });
  }

  global.todos[index].completed = !global.todos[index].completed;

  return Response.json(global.todos[index]);
}

export async function DELETE(req, { params }) {
  const { id } = await params;

  global.todos = global.todos.filter((todo) => todo.id !== id);

  return Response.json({ success: true });
}
