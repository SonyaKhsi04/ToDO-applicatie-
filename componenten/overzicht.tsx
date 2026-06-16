import styles from "../css/overzicht.module.css";

//Dit component krijgt alle data van bovenaf
type OverzichtProps = {
  datum: string;
  voltooid: number;
  totaal: number;
};

export default function Overzicht({ datum, voltooid, totaal }: OverzichtProps) {
  const percentage = Math.round((voltooid / totaal) * 100);
  //Dit component krijgt alle data van bovenaf
  return (
    <section className={styles.overzicht}>
      <div className={styles.bovenkant}>
        <p className={styles.datum}>{datum}</p>
        <p className={styles.voltooid}>
          {voltooid}/{totaal} Voltooid
        </p>
      </div>
      {/* Titel van het dashboard overzicht */}
      <h1 className={styles.titel}>Mijn Taken</h1>

      <div className={styles.voortgangBalk}>
        <div className={styles.voortgang} style={{ width: `${percentage}%` }} />
      </div>

      <div className={styles.onderkant}>
        <p>Voortgang</p>
        <p className={styles.percentage}>{percentage}%</p>
      </div>
    </section>
  );
}
