import type { Todo } from "@/types/todo";
import styles from "../css/todos.module.css";

//ontvangt de taken
type TaakLijstProps = {
  todos: Todo[];
  filter: string;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TaakLijst({
  todos,
  filter,
  onToggle,
  onDelete,
}: TaakLijstProps) {
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Alles") return true;
    if (filter === "Open") return !todo.completed;
    if (filter === "Klaar") return todo.completed;

    return todo.category === filter.toLowerCase();
  });

  return (
    <div className={styles["taak-lijst"]}>
      {filteredTodos.map((todo) => (
        <div
          className={`${styles["taak-kaart"]} ${
            todo.completed ? styles.cardDone : ""
          }`}
          key={todo.id}
        >
          {/* ✔ Knop om taak af te vinken / terug open te zetten */}
          <button
            onClick={() => onToggle(todo.id)}
            className={`${styles.check} ${todo.completed ? styles.done : ""}`}
          >
            {todo.completed && "✓"}
          </button>

          <p
            className={`${styles.tekst} ${todo.completed ? styles.klaar : ""}`}
          >
            {todo.title}
          </p>

          <span className={`${styles.tag} ${styles[todo.category]}`}>
            {todo.category}
          </span>
          {/* 🗑 Verwijder knop */}
          <button
            onClick={() => onDelete(todo.id)}
            className={styles.verwijder}
          >
            ⌫
          </button>
        </div>
      ))}
    </div>
  );
}
