function formatScore(value) {
  return Number.isFinite(Number(value)) ? Number(value).toLocaleString("es-GT") : "0";
}

export default function ScorePanel({
  round,
  targetScore,
  deckCount,
  selectedCount,
  lastResult,
  message,
  gameStatus,
}) {
  const resultTone = lastResult?.passed ? "score-panel__result--success" : "score-panel__result--fail";

  return (
    <aside className="score-panel" aria-label="Marcador">
      <div className="score-panel__stats">
        <div>
          <span>Ronda</span>
          <strong>{round}</strong>
        </div>
        <div>
          <span>Meta</span>
          <strong>{formatScore(targetScore)}</strong>
        </div>
        <div>
          <span>Mazo</span>
          <strong>{deckCount}</strong>
        </div>
        <div>
          <span>Elegidas</span>
          <strong>{selectedCount}</strong>
        </div>
      </div>

      <div className="score-panel__status">
        <span>Estado</span>
        <p>{message || (gameStatus === "playing" ? "Elige cartas para jugar." : "Partida pausada.")}</p>
      </div>

      {lastResult ? (
        <div className={`score-panel__result ${resultTone}`}>
          <span>{lastResult.combination || "Mano"}</span>
          <strong>{formatScore(lastResult.finalScore ?? lastResult.score)} pts</strong>
          {lastResult.jokerBonus ? <p>Jokers: {lastResult.jokerBonus}</p> : null}
        </div>
      ) : null}
    </aside>
  );
}
