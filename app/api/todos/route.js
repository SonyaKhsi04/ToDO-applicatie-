if (!global.todos) {
  global.todos = [];
}

export async function GET() {
  return Response.json(global.todos);
}

export async function POST(req) {
  const body = await req.json();

  const newTodo = {
    id: crypto.randomUUID(),
    title: body.title,
    category: body.category,
    completed: false,
  };

  global.todos.push(newTodo);

  return Response.json(newTodo);
}
