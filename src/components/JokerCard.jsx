export default function JokerCard({ joker, compact = false, onSelect }) {
  return (
    <button
      className={["joker-card", compact ? "joker-card--compact" : ""].filter(Boolean).join(" ")}
      type="button"
      onClick={() => onSelect?.(joker)}
    >
      <span className="joker-card__face" aria-hidden="true">
        J
      </span>
      <span className="joker-card__text">
        <strong>{joker.name}</strong>
        <small>{joker.description}</small>
      </span>
    </button>
  );
}
