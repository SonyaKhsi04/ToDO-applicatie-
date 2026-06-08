import styles from "../css/overzicht.module.css";

type OverzichtProps = {
  datum: string;
  voltooid: number;
  totaal: number;
};

export default function Overzicht({ datum, voltooid, totaal }: OverzichtProps) {
  const percentage = Math.round((voltooid / totaal) * 100);

  return (
    <section className={styles.overzicht}>
      <div className={styles.bovenkant}>
        <p className={styles.datum}>{datum}</p>
        <p className={styles.voltooid}>
          {voltooid}/{totaal} Voltooid
        </p>
      </div>

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
