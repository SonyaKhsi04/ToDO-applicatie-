//data blijft beschikbaar zolang de server draait
if (!global.todos) {
  global.todos = [];
}
//Wisselt de completed-status van een specifieke todo
export async function PATCH(req, { params }) {
  const { id } = await params;

  const index = global.todos.findIndex((todo) => todo.id === id);
  //Geef foutmelding terug als todo niet bestaat
  if (index === -1) {
    return Response.json({ error: "Todo niet gevonden" }, { status: 404 });
  }
  //Wissel tussen voltooid en niet-voltooid
  global.todos[index].completed = !global.todos[index].completed;

  return Response.json(global.todos[index]);
}
//Verwijdert een specifieke todo op basis van id
export async function DELETE(req, { params }) {
  const { id } = await params;

  global.todos = global.todos.filter((todo) => todo.id !== id);

  return Response.json({ success: true });
}
