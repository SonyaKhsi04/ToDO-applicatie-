import styles from "../css/toevoegen.module.css";

export default function TaakInvoer() {
  return (
    <div className={styles["taak-invoer"]}>
      <input placeholder="Nieuwe taak toevoegen..." />

      <select defaultValue="werk">
        <option value="werk">Werk</option>
        <option value="persoonlijk">Persoonlijk</option>
        <option value="gezondheid">Gezondheid</option>
        <option value="finance">Finance</option>
      </select>

      <button>+</button>
    </div>
  );
}
