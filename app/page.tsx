"use client";

import { useEffect, useState } from "react";
const [todos, setTodos] = useState([]);
const [filter, setFilter] = useState("all");

useEffect(() => {
  fetch("/api/todos")
    .then((res) => res.json())
    .then((data) => setTodos(data));
}, []);

import Overzicht from "../componenten/overzicht";
import CategorieFilters from "../componenten/filter";
import TaakInvoer from "../componenten/toevoegen";
import TaakLijst from "../componenten/todos";

export default function Page() {
  return (
    <main>
      <Overzicht datum="Donderdag — 4 Juni 2026" voltooid={2} totaal={7} />

      <CategorieFilters />

      <TaakInvoer />

      <TaakLijst />
    </main>
  );

  const addTodo = async (title: string) => {
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    const newTodo = await res.json();

    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <>
      <Toevoegen addTodo={addTodo} />

      <Filter setFilter={setFilter} />

      <Overzicht todos={todos} />

      <Todos todos={todos} filter={filter} />
    </>
  );
}
