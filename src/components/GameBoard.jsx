import ActiveJokers from "./ActiveJokers.jsx";
import CardHand from "./CardHand.jsx";
import GameHeader from "./GameHeader.jsx";
import GameOverPanel from "./GameOverPanel.jsx";
import JokerPicker from "./JokerPicker.jsx";
import ScorePanel from "./ScorePanel.jsx";

export default function GameBoard({
  game,
  selectedCardIds,
  onToggleCard,
  onSubmitHand,
  onChooseJoker,
  onRestart,
}) {
  const isPlaying = game.gameStatus === "playing";
  const isChoosingJoker = game.gameStatus === "choosingJoker";
  const isGameOver = game.gameStatus === "gameOver";

  return (
    <main className="game-shell">
      <GameHeader
        round={game.round}
        targetScore={game.targetScore}
        gameStatus={game.gameStatus}
        onRestart={onRestart}
      />

      <div className="game-layout">
        <section className="table">
          <div className="table__topline">
            <div>
              <span>Mano</span>
              <strong>{game.hand.length}/8 cartas</strong>
            </div>
            <button
              className="button button--primary"
              type="button"
              disabled={!isPlaying || selectedCardIds.length === 0}
              onClick={onSubmitHand}
            >
              Jugar mano
            </button>
          </div>

          <CardHand
            cards={game.hand}
            selectedCardIds={selectedCardIds}
            disabled={!isPlaying}
            onToggleCard={onToggleCard}
          />

          {isChoosingJoker ? <JokerPicker options={game.jokerOptions} onChoose={onChooseJoker} /> : null}
          {isGameOver ? (
            <GameOverPanel summary={game.gameOverSummary} activeJokers={game.activeJokers} onRestart={onRestart} />
          ) : null}
        </section>

        <div className="side-rail">
          <ScorePanel
            round={game.round}
            targetScore={game.targetScore}
            deckCount={game.deck.length}
            selectedCount={selectedCardIds.length}
            lastResult={game.lastResult}
            message={game.message}
            gameStatus={game.gameStatus}
          />
          <ActiveJokers jokers={game.activeJokers} />
        </div>
      </div>
    </main>
  );
}
