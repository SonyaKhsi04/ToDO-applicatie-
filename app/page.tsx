"use client";

import { useEffect, useState } from "react";

import Overzicht from "../componenten/overzicht";
import CategorieFilters from "../componenten/filter";
import TaakInvoer from "../componenten/toevoegen";
import TaakLijst from "../componenten/todos";

export type Todo = {
  id: string;
  title: string;
  category: string;
  completed: boolean;
};

export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("Alles");

  // GET TODOS
  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  // ➕ ADD TODO
  const addTodo = async (title: string, category: string) => {
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, category }),
    });

    const newTodo = await res.json();

    setTodos((prev) => [...prev, newTodo]);
  };

  // ✔ TOGGLE TODO
  const toggleTodo = async (id: string) => {
    const res = await fetch(`/api/todos/${id}`, {
      method: "PATCH",
    });

    const updated = await res.json();

    setTodos((prev) => prev.map((todo) => (todo.id === id ? updated : todo)));
  };

  // 🗑 DELETE TODO
  const deleteTodo = async (id: string) => {
    await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });

    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <main>
      <Overzicht
        datum="Donderdag — 4 Juni 2026"
        voltooid={todos.filter((t) => t.completed).length}
        totaal={todos.length}
      />

      <CategorieFilters setFilter={setFilter} />

      <TaakInvoer addTodo={addTodo} />

      <TaakLijst
        todos={todos}
        filter={filter}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </main>
  );
}
