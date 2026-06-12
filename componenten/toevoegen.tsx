"use client";
import { useState } from "react";
import styles from "../css/toevoegen.module.css";

type TaakInvoerProps = {
  addTodo: (title: string, category: string) => Promise<void>;
};

export default function TaakInvoer({ addTodo }: TaakInvoerProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("werk");

  const handleSubmit = async () => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    await addTodo(trimmedTitle, category);
    setTitle("");
  };

  return (
    <div className={styles["taak-invoer"]}>
      <input
        placeholder="Nieuwe taak toevoegen..."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") handleSubmit();
        }}
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="werk">Werk</option>
        <option value="persoonlijk">Persoonlijk</option>
        <option value="gezondheid">Gezondheid</option>
        <option value="finance">Finance</option>
      </select>

      <button onClick={handleSubmit}>+</button>
    </div>
  );
}
