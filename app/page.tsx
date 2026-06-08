import Overzicht from "../componenten/overzicht";

export default function Page() {
  return (
    <main>
      <Overzicht datum="Donderdag — 4 Juni 2026" voltooid={2} totaal={7} />
    </main>
  );
}
