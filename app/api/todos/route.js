if (!global.todos) {
  global.todos = [];
}
// Maakt een nieuwe taak aan
export async function GET() {
  return Response.json(global.todos);
}
// Maakt een nieuwe taak aan
export async function POST(req) {
  const body = await req.json();

  const newTodo = {
    id: crypto.randomUUID(),
    title: body.title,
    category: body.category,
    // Nieuwe taken zijn standaard niet voltooid
    completed: false,
  };

  global.todos.push(newTodo);
  //Geef de nieuwe taak terug aan de client
  return Response.json(newTodo);
}
