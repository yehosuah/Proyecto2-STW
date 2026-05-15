export default function GameMenu({ onStart }) {
  return (
    <main className="menu-shell">
      <section className="menu-panel">
        <div className="menu-panel__mark">NB</div>
        <h1>Not-Balatro</h1>
        <p>Arma manos, supera la meta y gana jokers para seguir subiendo.</p>
        <button className="button button--primary" type="button" onClick={onStart}>
          Nueva partida
        </button>
      </section>
    </main>
  );
}
