let todos = [];

export async function GET() {
  return Response.json(todos);
}

export async function POST(req) {
  const body = await req.json();

  const newTodo = {
    id: crypto.randomUUID(),
    title: body.title,
    completed: false,
  };

  todos.push(newTodo);

  return Response.json(newTodo);
}
