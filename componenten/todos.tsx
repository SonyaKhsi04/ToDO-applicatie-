import styles from "../css/todos.module.css";

const taken = [
  { tekst: "Presentatie Afmaken Voor Klant", categorie: "werk", gedaan: false },
  { tekst: "E-mails Beantwoorden", categorie: "werk", gedaan: true },
  { tekst: "Sporten — 45 Minuten", categorie: "gezondheid", gedaan: false },
  { tekst: "Boodschappen Doen", categorie: "persoonlijk", gedaan: false },
  {
    tekst: "Maandelijkse Uitgaven Bijhouden",
    categorie: "finance",
    gedaan: false,
  },
  { tekst: "Doktersafspraak Plannen", categorie: "gezondheid", gedaan: true },
  { tekst: "Portfolio Website Updaten", categorie: "werk", gedaan: false },
];

export default function TaakLijst() {
  return (
    <div className={styles["taak-lijst"]}>
      {taken.map((taak, index) => (
        <div className={styles["taak-kaart"]} key={index}>
          <button className={`${styles.check} ${taak.gedaan ? styles.done : ""}`}>
            {taak.gedaan && "✓"}
          </button>

          <p className={`${styles.tekst} ${taak.gedaan ? styles.klaar : ""}`}>
            {taak.tekst}
          </p>

          <span className={`${styles.tag} ${styles[taak.categorie]}`}>
            {taak.categorie}
          </span>

          <button className={styles.verwijder}>⌫</button>
        </div>
      ))}
    </div>
  );
}
