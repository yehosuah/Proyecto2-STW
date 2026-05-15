import JokerCard from "./JokerCard.jsx";

export default function JokerPicker({ options = [], onChoose }) {
  if (!options.length) {
    return null;
  }

  return (
    <section className="joker-picker" aria-label="Elige un joker">
      <div className="joker-picker__head">
        <span>Recompensa</span>
        <h2>Elige un joker</h2>
      </div>
      <div className="joker-picker__grid">
        {options.slice(0, 2).map((joker) => (
          <JokerCard key={joker.id} joker={joker} onSelect={onChoose} />
        ))}
      </div>
    </section>
  );
}
