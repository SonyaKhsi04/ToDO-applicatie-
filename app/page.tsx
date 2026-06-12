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

  // DATA OPHALEN VAN DE BACKEND BIJ HET LADEN VAN DE PAGINA
  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

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

  return (
    <main>
      <Overzicht
        datum="Donderdag — 4 Juni 2026"
        voltooid={0}
        totaal={todos.length}
      />

      <CategorieFilters setFilter={setFilter} />

      <TaakInvoer addTodo={addTodo} />

      <TaakLijst todos={todos} filter={filter} />
    </main>
  );
}
