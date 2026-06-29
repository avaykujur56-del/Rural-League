import "./TournamentCard.css";

function TournamentCard() {
  return (
    <section className="tournament">

      <h2>🏆 Dimdima Emerging ST Youth Club</h2>

      <div className="info">

        <p>📍 Dimdima Tea Estate, Alipurduar</p>

        <p>📅 28 June – 26 July 2026</p>

        <p>⚽ Sport: Football</p>

        <p>👥 Teams: 6</p>

        <p>🏟 Venue: Village Ground</p>

        <p>🎖 Organizer: Rural League</p>

      </div>

      <button className="btn">
        View Tournament
      </button>

    </section>
  );
}

export default TournamentCard;